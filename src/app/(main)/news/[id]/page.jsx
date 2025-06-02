import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { DateObject } from "react-multi-date-picker"
import './news.css'
import { FaTelegramPlane, FaInstagram, FaTwitter, FaFacebook, } from 'react-icons/fa';
// import { formatTextWithSpacing } from './content';
import Tags from '../../components/Tags';
import CopyButton from './CopyButton';
import { getNews } from './getNews.js';
import NewsContentClient from './NewsContentClient'


export async function generateMetadata({ params }) {
    const { id:news_id } = await params;
    const news = await getNews(news_id);

  return {
    title: news.title,
    description: news.news_lead,
    openGraph: {
      title: news.title,
      description: news.news_lead,
      images: [`https://backend.navayetabriz.ir/uploads/${news.image}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: news.title,
      description: news.news_lead,
      images: [`https://backend.navayetabriz.ir/uploads/${news.image}`],
    },
  };
}

export default async function page({ params }) {
    const { id:news_id } = await params;
    const news = await getNews(news_id);
    const date = new DateObject({ calendar: persian, locale: persian_fa, date: news.news_date * 1000 })
    return (
        <>
            <div className='container-news2'>
                <div className='right-news'>
                    <div className='right-top'>
                        <div className='time'>
                            <p>
                                {date.day} {date.month.name} {date.year}
                            </p>
                        </div>
                        <div>
                            <ul className='ul-icon'>
                                <li className='li-icon'>
                                    <Link href="#" >
                                        <i className='icon'>
                                            <FaTelegramPlane size={24} />
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" >
                                        <i className='icon'>
                                            <FaInstagram size={24} />
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className='icon'>
                                            <FaTwitter size={24} />
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <i className='icon'>
                                            <FaFacebook size={24} />
                                        </i>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='right-page'>
                        <li> {news.top_title}:</li>
                        <h1>{news.title}</h1>
                        <div className='sumarry'>
                            <Image src={'https://backend.navayetabriz.ir/uploads/' + news.image} width={620} height={413} alt='aks' />
                            <div className='sumarry-children'>
                                <p>
                                    {news.news_lead}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='text'>
                            <NewsContentClient html={news.content} />
                                <p className='news-code'>کد خبر: {news.id}</p>
                            </div>
                            <div className='end-text'>
                                <ul className='icon-links'>
                                    <li>
                                        <Link href="#">
                                            <FaTelegramPlane size={25} className='telegram' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <FaInstagram size={25} className='instagram' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <FaFacebook size={25} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <FaTwitter size={25} className='twitter' />
                                        </Link>
                                    </li>
                                </ul>
                                <div className='short-link'>
                                    <CopyButton text={'navayetabriz.ir/news/' + news.id} />
                                    <Link href="/" className='text-short-link'>{'navayetabriz.ir/news/' + news.id}</Link>
                                </div>
                            </div>
                        </div>
                        <div className='tags-title-2' >
                            <div className='children-other-tags'>
                                <span className='other-tags-title'>برچسب‌ها</span>
                            </div>
                            <div>
                                <ul className='ul-tags'>
                                    {
                                        news.tags.map((tag, i) => <Tags key={i} value={tag.title} link={tag.name} />)
                                    }

                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='children-other-tags'>
                                <span className='other-tags-title'>نظر شما</span>
                            </div>
                            <div className='texts'>
                                <ul>
                                    <li>
                                        نظرات حاوی توهین و هرگونه نسبت ناروا به اشخاص حقیقی و حقوقی منتشر نمی‌شود.
                                    </li>
                                    <li>
                                        نظراتی که غیر از زبان فارسی یا غیر مرتبط با خبر باشد منتشر نمی‌شود.
                                    </li>
                                </ul>
                            </div>
                            <div className=''>
                                <form action="">
                                    <div className="form1">
                                        <div className="input-wrapper">
                                            <div className="form-group">
                                                <input type="text" required  />
                                                <label>نام</label>
                                            </div>
                                        </div>

                                        <div className="input-wrapper">
                                            <div className="form-group">
                                                <input type="email" required  />
                                                <label>ایمیل</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form2">
                                        <div className="input-wrapper2">
                                            <div className="form-group2">
                                                <input type="text" required className='people-opinion' />
                                                <label>نظر شما</label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className='captcha'>
                                        <p>* لطفا حاصل عبارت را در جعبه متن روبرو وارد کنید</p>
                                    </div> */}
                                    <div className='send'>
                                        <button>
                                            ارسال
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
