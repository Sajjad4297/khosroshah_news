"use client";

import { useState } from "react";
import "./news.css";

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("خطا در کپی کردن:", err);
    }
  };

  return (
    <button onClick={handleCopy} className="copy-button">
      {copied ? "کپی شد!" : "کپی لینک"}
    </button>
  );
}
