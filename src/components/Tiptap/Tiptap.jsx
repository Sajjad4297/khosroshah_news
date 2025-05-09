'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Highlight from '@tiptap/extension-highlight'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import HardBreak from '@tiptap/extension-hard-break'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import History from '@tiptap/extension-history'

const Tiptap = ({setInputData}) => {
    const handleChange = () => {
        setInputData(prevState => ({
            ...prevState,
            content: editor.getHTML(),
        })
        )
    }

    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            Heading,
            Bold,
            Highlight,
            Italic,
            Link,
            HardBreak,
            History.configure({
                newGroupDelay: 500,
            }),
            Placeholder.configure({
                placeholder: 'متن خبر',
            }),
        ],
        immediatelyRender:false,
        onUpdate: handleChange,
    })

    if (!editor) {
        return null;
    }

    return (
        <div className='tiptap-editor'>
            <div className='tiptap-control'>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                ><b>B</b></button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                ><i>I</i></button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                >H1</button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                >H2</button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                >H3</button>
                <button
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                >Break</button>

            </div>
            <div className="tiptap-input">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}

export default Tiptap
