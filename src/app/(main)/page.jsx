export const dynamic = 'force-dynamic';
import Image from "next/image";
import Link from "next/link";
import "./Home.css";
import img from '@/img/slm.png';
import OtherImportantNews from "./components/OtherImportantNews";
import ImageSlider from "./ImageSlider";
import { Slider } from "antd";
import img1 from '@/img/slm.png';
import img2 from '@/img/slm.png';
import img3 from '@/img/slm.png';

async function getNews() {
    const res = await fetch("https://backend.navayetabriz.ir/api/news-over-view", {
        cache: 'no-store',
    });
    const result = await res.json();
    return result
}
async function getNewsByVisit() {
    const res = await fetch("https://backend.navayetabriz.ir/api/news-over-view/byVisit", {
        cache: 'no-store',
    });
    const result = await res.json();
    return result
}

export default async function Home() {


    const { data: news } = await getNews();
    const { data: newsByVisit } = await getNewsByVisit();
    console.log("✅ ALL NEWS", news);

    const leadNews = news
        .filter(n => n.topics?.some(t => t.name === 'lead1'))
        .sort((a, b) => new Date(b.news_date) - new Date(a.news_date));

    const nonLeadNews = news
        .filter(n => !n.topics?.some(t => t.name === 'lead1'))
        .sort((a, b) => b.news_date - a.news_date);

    const mainNews = nonLeadNews.slice(0, 6);
    const otherNews = nonLeadNews.slice(6, 20);

    const mostViewedManual = news.filter(n =>
        n.topics?.some(t => t.name === 'most_viewed')
    );

    const mostViewedMain = mostViewedManual.slice(0, 6);



    return (
        <div className="Home-page">
            <div className="right-page">
                <div className='main'>
                    {leadNews.length > 0 && (
                        <Link href={`/news/${leadNews[0].id}`} className="right-main">
                            <div className="img-side">
                                <Image
                                    src={`https://backend.navayetabriz.ir/uploads/${leadNews[0].image}`}
                                    width={400}
                                    height={250}
                                    alt="تصویر خبر"
                                />
                            </div>
                            <div className="text-side">
                                <p className="p">{leadNews[0].top_title && leadNews[0].top_title + ':'}</p>
                                <h3 className="title">
                                    <span className="children-title">{leadNews[0].title}</span>
                                </h3>
                                <p className="discriptions">{leadNews[0].news_lead}</p>
                            </div>
                        </Link>
                    )}


                </div>

                <div className="main-2">
                    <div className="top-main">
                        {mainNews.map((item, index) => (
                            <Link href={`/news/${item.id}`} key={index} className="children-title">
                                <Image
                                    src={`https://backend.navayetabriz.ir/uploads/${item.image}`}
                                    width={250}
                                    height={150}
                                    alt={item.title}
                                />
                                <h3 className="title2">
                                    <p>{item.title}</p>
                                </h3>
                            </Link>
                        ))}
                    </div>

                    <div className="Most-viewed-news">
                        <div className="Most-viewed-news-title">
                            <h3>پربازدیدترین اخبار</h3>
                        </div>
                        <div className="container-news">
                            <div className="Most-viewed-news-top">
                                {mostViewedMain.slice(0, 3).map((item, index) => (
                                    <div key={index} className="children-Most-viewed-news-top">
                                        <Link href={`/news/${item.id}`}>{item.title}</Link>
                                    </div>
                                ))}
                            </div>
                            <div className="Most-viewed-news-bot">
                                {mostViewedMain.slice(3, 6).map((item, index) => (
                                    <div key={index} className="children-Most-viewed-news-top">
                                        <Link href={`/news/${item.id}`}>{item.title}</Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <OtherImportantNews />

                    <div className="other-news">
                        {otherNews.map((item, index) => (
                            <div className="news" key={index}>
                                <Link href={`/news/${item.id}`} className="children-news">
                                    <div>
                                        <Image
                                            src={`https://backend.navayetabriz.ir/uploads/${item.image}`}
                                            width={200}
                                            height={120}
                                            alt="تصویر خبر"
                                        />
                                    </div>
                                    <div className="news-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.news_lead}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    {/* <div className="photo-news">
            <div className="photo">
              <OtherImportantNews text="تصاوير" href="/important-news" className="Other-important-news" />
              <div className="photo-img">
                <Link href="#" className="slider">
                  <ImageSlider slides={slides} />
                </Link>
              </div>
            </div>
            <div className="video">
              <OtherImportantNews text="بیننده" href="/important-news" className="Other-important-news video" />
              <div className="photo-video">
                <div className="photo-item">
                  <Image src={img} width="50%" height={100} alt="تصویر خبر" />
                  <p className="title">عنوان اول</p>
                </div>
                <div className="photo-item">
                  <Image src={img} width="50%" height={100} alt="تصویر خبر" />
                  <p className="title">عنوان دوم</p>
                </div>
                <div className="photo-item">
                  <Image src={img} width="50%" height={100} alt="تصویر خبر" />
                  <p className="title">عنوان سوم</p>
                </div>
                <div className="photo-item">
                  <Image src={img} width="50%" height={100} alt="تصویر خبر" />
                  <p className="title">عنوان سوم</p>
                </div>
                <div className="photo-item">
                  <Image src={img} width="50%" height={100} alt="تصویر خبر" />
                  <p className="title">عنوان سوم</p>
                </div>
                <div className="photo-item">
                  <Image src={img} width="50%" height={100} alt="تصویر خبر" />
                  <p className="title">عنوان سوم</p>
                </div>
              </div>
            </div>
          </div> */}
                </div>
            </div>
        </div>
    );
}
