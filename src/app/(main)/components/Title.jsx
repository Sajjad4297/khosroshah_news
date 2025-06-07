import React from 'react'
import './Title.css'

export default function Title({title}) {
    return (
        <div>
            <div className='media-header'>
                <div className="archive-bar">
                    <div className="archive-label">{title} - پایگاه خبری نوای تبریز</div>
                </div>
            </div>
        </div>
    )
}
