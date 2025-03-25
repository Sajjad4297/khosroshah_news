import React from 'react'
import './navbar.css'
import Image from 'next/image'
import logo from '@/img/logo.png'
import Link from 'next/link'
import axios from 'axios'
import NavItem from './NavItem'
async function getTopics() {
    const res = await axios('http://localhost:3000/api/topic');
    return res.data.topics;
  }
export default async function Navbar() {
    const topics = await getTopics();


    return (
        <header>
            <div className='container'>
                <div>
                    <Image src={logo} width={350} height={120} className='logo' alt='logo' />
                </div>
                <div>
                    <ul className='ul1'>
                        {
                            link.map(link => (
                                <li key={link.text} className='li1'>
                                    <Link href={link.href} className='text-color'>{link.text}</Link>
                                </li>

                            ))}
                        <form action="">
                            <input type="search" placeholder='جستجو...' className='search-box' />
                        </form>
                    </ul>
                </div>
            </div>
            <div className='dropdown'>
                {topics.map((topic,i) => <NavItem topic={topic} key={i} />)}

            </div>
        </header>
    )
}
