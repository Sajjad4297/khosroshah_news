// components/TagSelector.js
'use client'
import { useState, useEffect } from 'react';
import './TagSelector.css'; // Import the CSS

export default function TagSelector({ selected = [], onChange }) {
    const [input, setInput] = useState('');
    const [selectedTags, setSelectedTags] = useState(selected);
    const [allTags, setAllTags] = useState([]);

    useEffect(() => {
        fetch("https://news.sajy.ir/api/tags", {
            method: "GET",
        })
        .then((res) => res.json())
        .then(res => setAllTags(res.data))
        .catch(err => console.error('Error fetching tags:', err));
    }, []);

    const filteredTags = allTags?.filter(
        tag =>
            tag.title.includes(input) &&
            !selectedTags.includes(tag)
    );

    const addTag = (tag) => {
        const newTags = [...selectedTags, tag];
        setSelectedTags(newTags);
        onChange?.(newTags);
        setInput('');
    };

    const removeTag = (tag) => {
        const newTags = selectedTags.filter(t => t !== tag);
        setSelectedTags(newTags);
        onChange?.(newTags);
    };

    return (
        <div className="tag-selector">
            <div className="selected-tags">
                {selectedTags.map(tag => (
                    <span key={tag.id} className="tag-admin">
                        {tag.title}
                        <button className="remove-btn" onClick={() => removeTag(tag)}>
                            &times;
                        </button>
                    </span>
                ))}
            </div>
            <input
                className="tag-input"
                placeholder="برچسب ها..."
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            {input && filteredTags.length > 0 && (
                <div className="tag-dropdown">
                    {filteredTags.map(tag => (
                        <div
                            key={tag.id}
                            className="tag-dropdown-item"
                            onClick={() => addTag(tag)}
                        >
                            {tag.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
