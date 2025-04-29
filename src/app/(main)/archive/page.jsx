import React from 'react'
import Image from 'next/image'
import img from '@/img/slm.png';
import Link from 'next/link';
import "./archive.css"
export default function page() {
    const archiveData = Array.from({ length: 15 }, (index) => ({
        id: index + 1,
        OnTitle: "مشاوره حقوقی:",
        title: "آیا با انتقال اموال به نام دیگران می‌توان از پرداخت بدهی فرار کرد؟",
        text: " اگر بدهکار قبل از صدور حکم دادگاه، اموال خود را به قصد فرار از دِین (بدهی) به شخص دیگری منتقل کند، طلبکار می‌تواند درخواست ابطال این انتقال را ارائه دهد.",
        date: "۱۴۰۴-۰۲-۰۳ ۱۰:۴۲",
        img: img
    }));
    return (
        <div>
            {archiveData.map((Item) => (
                <Link href="#" className='archive-link'>
                    <div key={Item.id} className='archive-container'>
                        <Image src={Item.img} width={140} height={100} alt='img' />
                        <div className='archive-text'>
                            <h5>{Item.OnTitle}</h5>
                            <h4>{Item.title}</h4>
                            <p className='archive-text2'>{Item.text}</p>
                            <p>{Item.date}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
