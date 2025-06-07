import Link from 'next/link'
import React from 'react'

export default function BoxList({ tagTitle = "", news, newsByVisit }) {

    return (

        <div className='box-container'>
            <div className='title-box-list2'>
                <span className='title-box'>{tagTitle}</span>
            </div>
            <div className='list-box-list'>
                <ul>
                    {(news || []).slice(6, 13).map((item, index) => (
                        <li key={item.id}>
                            <Link href={`/news/${item.id}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}
