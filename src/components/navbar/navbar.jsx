"use client";
import React from 'react';
import './navbar.css';
import Image from 'next/image';
import logo from '@/img/final-03.png';
import Link from 'next/link';
import { useState } from 'react';
import NavItem from './NavItem';
import SearchModal from './SearchModal';



export default function Navbar() {
  const link = [
    { text: 'درباره ما', href: '/about' },
    { text: 'تماس با ما', href: '/call' }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openSearchModal = () => {
    setIsMenuOpen(false); 
    setIsSearchModalOpen(true);
  }
  const closeSearchModal = () => setIsSearchModalOpen(false);

  const topics = [
    {
      "id": 0,
      "title": "خانه",
      "name": "/",
      "sub_topic": []
    },
    {
      "id": 1,
      "title": "سیاسی",
      "name": "politic",
      "sub_topic": [
        { "id": 1, "title": "امام و رهبری", "name": "leaders", "topicId": 1 },
        { "id": 2, "title": "دولت", "name": "government", "topicId": 1 },
        { "id": 3, "title": "مجلس", "name": "parliament", "topicId": 1 },
        { "id": 4, "title": "امنیتی و دفاعی", "name": "security-defensive", "topicId": 1 },
        { "id": 5, "title": "سیاست خارجی", "name": "foreignpolitic", "topicId": 1 },
        { "id": 6, "title": "انرژی هسته‌ای", "name": "nuclear_energy", "topicId": 1 },
        { "id": 7, "title": "احزاب و تشکل‌ها", "name": "parties", "topicId": 1 }
      ]
    },
    {
      "id": 2,
      "title": "اجتماعی",
      "name": "society",
      "sub_topic": [
        { "id": 8, "title": "انتظامی و حوادث", "name": "security-accidents", "topicId": 2 },
        { "id": 9, "title": "شهری", "name": "urban", "topicId": 2 },
        { "id": 10, "title": "آموزش و پرورش", "name": "education", "topicId": 2 },
        { "id": 11, "title": "حقوقی و قضایی", "name": "justice", "topicId": 2 },
        { "id": 12, "title": "رفاه و آسیب‌های اجتماعی", "name": "welfare-socialdamage", "topicId": 2 },
        { "id": 13, "title": "خانواده", "name": "family", "topicId": 2 },
        { "id": 14, "title": "دانشگاه و حوزه", "name": "university-howzeh", "topicId": 2 },
        { "id": 15, "title": "سلامت", "name": "health", "topicId": 2 },
        { "id": 16, "title": "محیط زیست", "name": "environment", "topicId": 2 }
      ]
    },
    {
      "id": 3,
      "title": "اقتصادی",
      "name": "economy",
      "sub_topic": [
        { "id": 17, "title": "اقتصاد ایران", "name": "iran-economics", "topicId": 3 },
        { "id": 18, "title": "اقتصاد جهان", "name": "world-economics", "topicId": 3 },
        { "id": 19, "title": "انرژی", "name": "energy", "topicId": 3 },
        { "id": 20, "title": "بانک، بیمه و بورس", "name": "banking-insurance", "topicId": 3 },
        { "id": 21, "title": "راه و مسکن", "name": "civil", "topicId": 3 },
        { "id": 22, "title": "صنعت، معدن و تجارت", "name": "mining-trade", "topicId": 3 },
        { "id": 23, "title": "کار و تعاون", "name": "occupation", "topicId": 3 },
        { "id": 24, "title": "کشاورزی و دامپروری", "name": "agriculture", "topicId": 3 }
      ]
    },
    {
      "id": 4,
      "title": "فرهنگی",
      "name": "culture",
      "sub_topic": [
        { "id": 25, "title": "دین و اندیشه", "name": "religion-thought", "topicId": 4 },
        { "id": 26, "title": "رادیو و تلویزیون", "name": "radio-tv", "topicId": 4 },
        { "id": 27, "title": "رسانه", "name": "media", "topicId": 4 },
        { "id": 28, "title": "سینما و تئاتر", "name": "cinema-drama", "topicId": 4 },
        { "id": 29, "title": "فرهنگ عمومی", "name": "public-culture", "topicId": 4 },
        { "id": 30, "title": "کتاب، شعر و ادب", "name": "book-poem-lyrics", "topicId": 4 },
        { "id": 31, "title": "میراث فرهنگی و گردشگری", "name": "cultural-heritage", "topicId": 4 }
      ]
    },
    {
      "id": 5,
      "title": "ورزشی",
      "name": "sport",
      "sub_topic": [
        { "id": 32, "title": "فوتبال", "name": "football", "topicId": 5 },
        { "id": 33, "title": "توپ و تور", "name": "ball-tour", "topicId": 5 },
        { "id": 34, "title": "کشتی", "name": "wrestling", "topicId": 5 },
        { "id": 35, "title": "ورزش‌های رزمی", "name": "martialarts", "topicId": 5 },
        { "id": 36, "title": "سایر ورزش‌ها", "name": "othersport", "topicId": 5 },
        { "id": 37, "title": "یادداشت ورزشی", "name": "sport-note", "topicId": 5 }
      ]
    },
    {
      "id": 6,
      "title": "دانش و فناوری",
      "name": "tech",
      "sub_topic": [
        { "id": 38, "title": "ارتباطات و فناوری اطلاعات", "name": "ict", "topicId": 6 },
        { "id": 39, "title": "فناوری‌های نوین", "name": "newtechnologies", "topicId": 6 }
      ]
    },
  ];

  return (
    <header>
      <div className='container'>
          <Link href="/" className='logo-side'>
            <Image
              src={logo}
              width={400}
              height={350}
              alt="لوگوی سایت نوای تبریز" 
              style={{ objectFit: 'contain' }}
              className="logo"
              priority 
            />
          </Link>

       
        <div className='desktop-nav-section'> 
          <div className='div1'>
            {link.map(item => (
              <li key={item.text} className='li1'>
                <Link href={item.href} className='text-color'>{item.text}</Link>
              </li>
            ))}
          </div>
          <div>
            <form action="" className='desktop-search-form'>
              <input type="search" placeholder='جستجو...' className='search-box' />
            </form>
          </div>
        </div>
        <div className="mobile-buttons">
          <button
            type="button"
            className="mobile-search-trigger"
            onClick={openSearchModal}
            aria-label="باز کردن جستجو"
          >
           
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="باز و بسته کردن منو">
            <div className="bar top"></div>
            <div className="bar middle"></div>
            <div className="bar bottom"></div>
          </div>
        </div>
      </div>
      <div className={`dropdown ${isMenuOpen ? 'open' : ''}`}>
        {/* {link.map(item => (
          <Link key={`mobile-${item.text}`} href={item.href} className="dropdown-item" onClick={toggleMenu}>
            {item.text}
          </Link>
        ))} */}
      
        {topics.map((topic, i) => (
          <NavItem topic={topic} key={i} onClick={isMenuOpen ? toggleMenu : undefined} />
        ))}
      </div>
      <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
    </header>
  );
}