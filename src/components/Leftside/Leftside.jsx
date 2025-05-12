import React from 'react'
import "./Leftside.css"
import Link from 'next/link'
import BoxList from './BoxList';

async function getNews() {
    const res = await fetch("https://backend.navayetabriz.ir/api/news-over-view");
    const result = res.json();
    return result
}
async function getNewsByVisit() {
    const res = await fetch("https://backend.navayetabriz.ir/api/news-over-view/byVisit");
    const result = res.json();
    return result
}

export default async function Leftside() {
    const newsItems = [
        { title: "بورسی‌ترین استان‌های ایران کدامند؟", href: "/" },
        { title: "دفترچه آزمون دکتری ۱۴۰۴ امروز منتشر می شود؛ آغاز انتخاب رشته از فردا", href: "/" },
        { title: "سرمایه‌گذاری در صنایع فرهنگی ابزاری برای تقویت هویت ملی است", href: "/" },
        { title: "از مطالبه رهبری برای پخش «روایت فتح» تا دوربینی که شهادت آوینی را گرفت", href: "/" }
    ];
    const {data: news} = await getNews();
    const {data: newsByVisit} = await getNewsByVisit()
    return (
        <div className='container33'>
            <div className='box-list'>
                <div className='title-box-list'>
                    <Link href="/archive">
                        <h3>انتخاب سردبير</h3>
                    </Link>
                </div>
                <div className='list-box-list'>
                    <ul>
                        {newsItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <BoxList tagTitle = "تازه‌ترین اخبار" news={news} />
            </div>
            <div>
                <BoxList  tagTitle = "پربازدیدترین ها" newsByVisit={newsByVisit} />
            </div>
        </div>
    );
}
