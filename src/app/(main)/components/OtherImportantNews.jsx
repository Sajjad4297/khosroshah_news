import React from 'react'
import "../Home.css"
import Link  from 'next/link'

export default function OtherImportantNews({ text = "سایر اخبار مهم", href = "/important-news", className = "" }) {
    return (
        <div className={`Other-important-news ${className}`}>
            <Link href={href} className="Other-important-news-title">{text}</Link>
        </div>
    )
}
