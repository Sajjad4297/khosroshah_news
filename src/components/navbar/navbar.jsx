'use server'
import React from 'react'
import './navbar.css'
import Image from 'next/image'
import logo from '@/img/logo.png'
import Link from 'next/link'
import axios from 'axios'

export async function getServerSideProps() {
    try {
        const res = await axios.get('http://localhost:3000/api/topic'); // Fetch data using Axios
        const data = res.data; // Axios automatically parses JSON
        console.log(res)
        return {
            props: { data }, // Pass data as props
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: { data: null }, // Handle errors gracefully
        };
    }
}
export default async function Navbar({ data }) {
    const link = [{
        text: 'درباره ما',
        href: '/'
    }, {
        text: 'تماس با ما',
        href: '/'
    }];

    console.log(data);


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

            </div>
        </header>
    )
}
