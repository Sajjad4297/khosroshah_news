import React from 'react'
import './footer.css'
import Tag from '../Tag/Tag'
import Image from 'next/image'
import logo from "@/img/logo.png";
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
                    <Image src={logo} height={100} alt='logo'  />
            </div>
        </footer>
    )
}
