import React from 'react'
import './footer.css'
import Tag from '../Tag/Tag'
export default function Footer() {
    return (
        <footer>
            <div className='top-footer'>
                <div>
                    <h2>موضوعات داغ:</h2>
                    <ul>
                        <Tag value='موضوع 1' />
                        <Tag value='موضوع 2' />
                        <Tag value='موضوع 3' />
                        <Tag value='موضوع 4' />
                        <Tag value='موضوع 5' />
                    </ul>
                </div>
                <div>

                </div>
            </div>
            <div className='bottom-footer'>
                <h1></h1>
            </div>
        </footer>
    )
}
