import Link from 'next/link'
import React from 'react'

export default function BoxList({tagTitle = "" , news}) {

    const tagLinks = [
        "بورسی‌ترین استان‌های ایران کدامند؟",
        "دفترچه آزمون دکتری ۱۴۰۴ امروز منتشر می شود؛ آغاز انتخاب رشته از فردا",
        "سرمایه‌گذاری در صنایع فرهنگی ابزاری برای تقویت هویت ملی است",
        "از مطالبه رهبری برای پخش «روایت فتح» تا دوربینی که شهادت آوینی را گرفت",
        "از مطالبه رهبری برای پخش «روایت فتح» تا دوربینی که شهادت آوینی را گرفت",
        "از مطالبه رهبری برای پخش «روایت فتح» تا دوربینی که شهادت آوینی را گرفت",
        "از مطالبه رهبری برای پخش «روایت فتح» تا دوربینی که شهادت آوینی را گرفت",
    ];
    return (

        <div className='box-container'>
            <div className='title-box-list2'>
                <span className='title-box'>{tagTitle}</span>
            </div>
            <div className='list-box-list'>
                <ul>

                    { news ?
                    news.map((item,index)=>(index > 6 && index <= 13) &&
                        <li key={index}>
                            <Link href={"/news/" + item.id}>{item.title}</Link>
                        </li>

                    ):


                    tagLinks.map((text, index) => (
                        <li key={index}>
                            <Link href="/">{text}</Link>
                        </li>
                    ))

                }
                </ul>
            </div>
        </div>
    );
}
