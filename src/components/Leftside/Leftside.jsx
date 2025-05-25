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
    // const newsItems = [
    //     { title: "بورسی‌ترین استان‌های ایران کدامند؟", href: "/" },
    //     { title: "دفترچه آزمون دکتری ۱۴۰۴ امروز منتشر می شود؛ آغاز انتخاب رشته از فردا", href: "/" },
    //     { title: "سرمایه‌گذاری در صنایع فرهنگی ابزاری برای تقویت هویت ملی است", href: "/" },
    //     { title: "از مطالبه رهبری برای پخش «روایت فتح» تا دوربینی که شهادت آوینی را گرفت", href: "/" },
    //     { title: "از مطالبه رهبری برای پخش «روایت فتح» تا دوربینی که شهادت آوینی را گرفت", href: "/" },
    //     { title: "از مطالبه رهبری برای پخش «روایت فتح» تا دوربینی که شهادت آوینی را گرفت", href: "/" },
    //     { title: "از مطالبه رهبری برای پخش «روایت فتح» تا دوربینی که شهادت آوینی را گرفت", href: "/" }
    // ];
    const { data: news } = await getNews();
    const { data: newsByVisit } = await getNewsByVisit();

    const mostViewed = news
    .filter(n => n.topics?.some(t => t.name === 'most_viewed'))
    .slice(-7)
    .reverse();
  

    const editorChoiceNews = news.filter(
        (n) => n.topics?.some((t) => t.name.trim() === 'editorChoiceNews')
    );
    const editorChoiceNewsFiltered = editorChoiceNews.slice(-7).reverse();
    console.log("editorChoiceNews", editorChoiceNews);
    console.log("mostViewed", mostViewed);
    return (
        <div className='container33'>
            <div className='box-list'>
                <div className='title-box-list'>
                    <Link href="/archive/editor-choice">
                        <h3>انتخاب سردبير</h3>
                    </Link>
                </div>
                <div className='list-box-list'>
                    <ul>
                        {editorChoiceNewsFiltered.map((item, index) => (
                            <li key={index}>
                                <Link href={`/news/${item.id}`}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <BoxList tagTitle="پربازدیدترین ها" news={mostViewed} />
            </div>
        </div>
    );
}
