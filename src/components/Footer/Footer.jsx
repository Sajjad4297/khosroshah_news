"use client"
import React from 'react'
import './footer.css'
import Tag from '../Tag/Tag'
import Image from 'next/image'
import logo from "@/img/logo.png";
import rubika from "@/img/minimal-gray.png";
import eitta from "@/img/eitta.png";
import bale from "@/img/90-GraFa-4.png"
import Link from 'next/link'
import { FaTelegramPlane, FaInstagram, FaTwitter, FaFacebook, FaSearch, } from 'react-icons/fa';
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
                <div className='top-left-footer'>
                    <div className='logo-footer'>
                        <ul className='social-footer'>
                            <Link href="/" title='روبیکا'>
                                <Image src={rubika} width={28} height={28} alt='rubika' />
                            </Link>
                            <Link href="#" title='تلگرام'>
                                <FaTelegramPlane size={25} className='footer-telegram' />
                            </Link>
                            <Link href="#" title='اینستاگرام'>
                                <FaInstagram size={25} className='footer-instagram' />
                            </Link>
                            <Link href="#" title='توییتر'>
                                <FaTwitter size={25} className='footer-twitter' />
                            </Link>
                            <Link href="#" title='فیس بوک'>
                                <FaFacebook size={25} className='footer-facebook' />
                            </Link>
                            <Link href="#" title='ایتا'>
                                <Image src={eitta} width={28} height={28} alt='eitta' />
                            </Link>
                            <Link href="#" title='بله'>
                                <Image src={bale} width={28} height={28} alt='bale' />
                            </Link>
                        </ul>
                    </div>
                    <form action="">
                        <div className='search-footer'>
                            <input type="text" placeholder='جستجو...' className='search-input' />
                            <button className='search-icon'>
                            <FaSearch size={25}  />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='bottom-footer'>
                <Image src={logo} height={100} alt='logo' />
            </div>
        </footer>
    )
}
