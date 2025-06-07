'use client';
import React, { useCallback, useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Highlight from '@tiptap/extension-highlight';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Heading from '@tiptap/extension-heading';
import HardBreak from '@tiptap/extension-hard-break';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import History from '@tiptap/extension-history';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Image from '@tiptap/extension-image';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Blockquote from '@tiptap/extension-blockquote';
import CodeBlock from '@tiptap/extension-code-block';
import "./tiptap.css";
import { ColorPalette } from './ColorPalette';

const Tiptap = ({ setInputData, onEditorReady }) => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      TextStyle,
      Color,
      Heading,
      Bold,
      Italic,
      Highlight,
      Link.configure({
        openOnClick: true,
        defaultProtocol: 'https',
        protocols: ['http', 'https'],
      }),
      HardBreak,
      History.configure({ newGroupDelay: 500 }),
      Placeholder.configure({ placeholder: 'متن خبر' }),
      Image,
      BulletList,
      OrderedList,
      ListItem,
      Blockquote,
      CodeBlock,
    ],
    onUpdate: ({ editor }) => {
      setInputData(prev => ({
        ...prev,
        content: editor.getHTML(),
      }));
    },
    editorProps: {
      handleKeyDown(view, event) {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          editor.chain().focus().setHardBreak().run();
          return true;
        }
        return false;
      },
    },
  });

  // 👇 اعلام آماده بودن editor به بیرون
  useEffect(() => {
    if (editor && onEditorReady) {
      onEditorReady(editor);
    }
  }, [editor, onEditorReady]);

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  return (
    <div className='tiptap-editor'>
      <div className='tiptap-control'>
        <button onClick={() => editor.chain().focus().toggleBold().run()}><b>B</b></button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>
        <button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>link</button>
        <ColorPalette editor={editor} />
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const formData = new FormData();
            formData.append("image", file);

            const res = await fetch("https://backend.navayetabriz.ir/api/news-image-upload", {
              method: "POST",
              body: formData,
            });

            const data = await res.json();
            const imageUrl = "https://backend.navayetabriz.ir/uploads/" + data?.filename;

            editor.chain().focus().insertContent(`<p><img src="${imageUrl}" alt="image" /></p>`).run();
          }}
        />
      </div>
      <div className="tiptap-input">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
