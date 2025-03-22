import React from 'react'
import './navbar.css'
import Image from 'next/image'
import logo from '@/img/logo.png'
import Link from 'next/link'

export default function Navbar() {
    const link = [{
        text: 'درباره ما',
        href: '/'
    }, {
        text: 'تماس با ما',
        href: '/admin'
    }]
    return (
        <header>
            <div className='container'>
                <div>
                    <Image src={logo} width={350} height={120} className='logo' />
                </div>
                <div>
                    <ul className='ul1'>
                            {
                                link.map(link => (
                                    <li key={link.text} className='li1'>
                                        <Link href={link.href}  className='text-color'>{link.text}</Link>
                                    </li>

                                ))}
                            <form action="">
                                <input type="search" placeholder='جستجو...' className='search-box' />
                            </form>
                    </ul>
                </div>
            </div>
        </header>
    )
}
