import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img from '@/img/slm.png';
import './news.css'
import { FaTelegramPlane, FaInstagram, FaTwitter, FaFacebook, } from 'react-icons/fa';
// import { formatTextWithSpacing } from './content';
import Tags from '../components/Tags';
import CopyButton from './CopyButton';


const content = `به گزارش خبرگزاری مهر، مجتبی قهرمانی رئیس کل دادگستری هرمزگان با اعلام این خبر، اظهار کرد: با هماهنگی دادستان عمومی و انقلاب شهرستان قشم، رزمندگان نیروی دریایی سپاه پس از شناسایی یک فروند شناور حامل سوخت قاچاق در آب‌های خلیج فارس و حدفاصل جزایر لارک و قشم، نسبت به توقیف آن اقدام کردند.

وی با اشاره به دستگیری ۶ نفر در این رابطه، خاطرنشان کرد: در بازرسی از این شناور ۱۰۰ هزار لیتر سوخت قاچاق کشف و ضبط شده است.

قهرمانی با بیان اینکه مرتکبان قاچاق سازمان یافته سوخت علاوه بر جریمه نقدی و مجازات حبس به ضبط اموال ناشی از جرم نیز محکوم می‌شوند، گفت: در صورت اثبات جرم، در راستای اجرای ماده ۲۰ قانون مبارزه با قاچاق کالا، شناور دخیل در امر قاچاق نیز توقیف و علاوه بر مجازات‌های مقرر در ماده مذکور، معادل ارزش وسیله نقلیه به جریمه نقدی حامل اضافه می‌شود.

وی یادآور شد: سوخت‌های کشف شده از شناور یادشده هم طبق روال قانونی با دستور قضائی تحویل شرکت پخش و توزیع فرآورده‌های نفتی شده و به چرخه توزیع قانونی برمی‌گردد.

رئیس کل دادگستری هرمزگان همچنین با اشاره به اینکه پرونده شناور مذکور در سیر مراحل رسیدگی قضائی قرار دارد، تأکید کرد: دادگستری استان با همکاری ضابطین، راهبرد مقابله با قاچاق سازمان یافته سوخت را با قاطعیت ادامه می‌دهد و در راستای صیانت از منافع و سرمایه‌های ملت ایران لحظه‌ای درنگ نخواهد کرد.`;

const link = 'mehrnews.com/x37Msx'
export default function page() {
    return (
        <div className='container-news'>
            <div className='right-news'>
                <div className='right-top'>
                    <div className='time'>
                        <p>
                            ۱۸ فروردین ۱۴۰۴، ۱۴:۵۴
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
                    <li> وزیر تعاون، کار و رفاه اجتماعی:</li>
                    <h1>توقیف یک فروند شناور حامل سوخت قاچاق توسط نیروی دریایی سپاه</h1>
                    <div className='sumarry'>
                        <Image src={img} width={620} height={413} alt='aks' />
                        <div className='sumarry-children'>
                            <p>
                                کاخ سفید درباره مذاکرات غیرمستقیم ایران و آمریکا در عمان اعلام کرد: مذاکرات با ایران بسیار مثبت و سازنده بود.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='text'>
                            <p>{content}</p>
                            <p className='news-code'>کد خبر 6442937</p>
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
                            <CopyButton text={link}/>
                            <Link href="/" className='text-short-link'>{link}</Link>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className='children-other-tags'>
                            <span className='other-tags-title'>برچسب‌ها</span>
                        </div>
                        <div>
                            <ul className='ul-tags'>
                                <Tags value="جمهوری اسلامی ایران" />
                                <Tags value="سازمان غذا و دارو" />
                                <Tags value="کمیسیون بهداشت مجلس" />
                                <Tags value="مذاکره ایران و امریکا" />
                                <Tags value="خسروشاه نیوز" />
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
                                            <input type="text" required />
                                            <label>نام</label>
                                        </div>
                                    </div>

                                    <div className="input-wrapper">
                                        <div className="form-group">
                                            <input type="email" required />
                                            <label>ایمیل</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form2">
                                    <div className="input-wrapper2">
                                        <div className="form-group2">
                                            <input type="text" required />
                                            <label>نظر شما</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='captcha'>
                                    <p>* لطفا حاصل عبارت را در جعبه متن روبرو وارد کنید</p>
                                </div>
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
    )
}
