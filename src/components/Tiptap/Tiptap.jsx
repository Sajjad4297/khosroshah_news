'use client'
import React, { useCallback } from 'react'
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

const Tiptap = ({ setInputData }) => {
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
            HardBreak,
            History.configure({
                newGroupDelay: 500,
            }),
            Placeholder.configure({
                placeholder: 'متن خبر',
            }),
            Link.configure({
                openOnClick: true,
                defaultProtocol: 'https',
                protocols: ['http', 'https'],
                isAllowedUri: (url, ctx) => {
                    try {
                        // construct URL
                        const parsedUrl = url.includes(':') ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`)

                        // use default validation
                        if (!ctx.defaultValidate(parsedUrl.href)) {
                            return false
                        }

                        // disallowed protocols
                        const disallowedProtocols = ['ftp', 'file', 'mailto']
                        const protocol = parsedUrl.protocol.replace(':', '')

                        if (disallowedProtocols.includes(protocol)) {
                            return false
                        }

                        // only allow protocols specified in ctx.protocols
                        const allowedProtocols = ctx.protocols.map(p => (typeof p === 'string' ? p : p.scheme))

                        if (!allowedProtocols.includes(protocol)) {
                            return false
                        }

                        // disallowed domains
                        const disallowedDomains = ['example-phishing.com', 'malicious-site.net']
                        const domain = parsedUrl.hostname

                        if (disallowedDomains.includes(domain)) {
                            return false
                        }

                        // all checks have passed
                        return true
                    } catch {
                        return false
                    }
                },
                shouldAutoLink: url => {
                    try {
                        // construct URL
                        const parsedUrl = url.includes(':') ? new URL(url) : new URL(`https://${url}`)

                        // only auto-link if the domain is not in the disallowed list
                        const disallowedDomains = ['example-no-autolink.com', 'another-no-autolink.com']
                        const domain = parsedUrl.hostname

                        return !disallowedDomains.includes(domain)
                    } catch {
                        return false
                    }
                },

            }),
        ],
        immediatelyRender: false,
        onUpdate: handleChange,
        editorProps: {
    handleKeyDown(view, event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault()
        editor.chain().focus().setHardBreak().run()
        return true
      }
      return false
    }
}

    })
    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink()
                .run()

            return
        }

        // update link
        try {
            editor.chain().focus().extendMarkRange('link').setLink({ href: url })
                .run()
        } catch (e) {
            alert(e.message)
        }
    }, [editor])

    if (!editor) {
        return null
    }

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
                <button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
                    link
                </button>

            </div>
            <div className="tiptap-input">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}

export default Tiptap
