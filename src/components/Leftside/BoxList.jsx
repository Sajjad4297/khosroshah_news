import Link from 'next/link'
import React from 'react'

export default function BoxList({tagTitle = "" , news,newsByVisit}) {

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


                    newsByVisit.map((item, index) => ((index >= 6 && index <= 12) &&
                        <li key={index}>
                            <Link href={"/news/" + item.id}>{item.title}</Link>
                        </li>
                    ))

                }
                </ul>
            </div>
        </div>
    );
}
