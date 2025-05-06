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


export default function Home() {
  const slides = [
    { img: img1, title: 'دیدار فرماندهان با رهبری' },
    { img: img2, title: 'مراسم دفاع مقدس' },
    { img: img3, title: 'افتتاح پروژه‌های نظامی' },
  ];
  return (
    <div className="Home-page">
      <div className="right-page">
        <div className='main'>
          <Link href="/news-pages" className='right-main'>
            <div className='img-side'>
              <Image src={img} width={400} height={250} alt="تصویر خبر" />
            </div>
            <div className='text-side'>
              <p className="p">رضا شاه :</p>
              <h3 className="title">
                <span className="children-title">
                  راهپیمایی امسال یکی از باعزت‌ترین راهپیمایی‌های روز قدس خواهد بود
                </span>
              </h3>
              <p className="discriptions">
                رهبر معظم انقلاب اسلامی فرمودند: إن‌شاءالله راهپیمایی امسال، یکی از بهترین، پرشکوه‌ترین و باعزت‌ترین راهپیمایی‌های روز قدس خواهد بود.
              </p>
            </div>
          </Link>

        </div>

        <div className="main-2">
          <div className="top-main">
            {[...Array(6)].map((_, index) => (
              <Link href="/news-pages" key={index} className="children-title">
                <Image src={img} width={250} height={150} alt="تصویر خبر" />
                <h3 className="title">
                  <p >رهبر انصارالله: ایران نقش محوری در حمایت از فلسطین دارد</p>
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
                <div className="children-Most-viewed-news-top">
                  <Link href="#">
                    شهرام دبیری از سمت معاونت پارلمانی رئیس‌جمهور برکنار شد
                  </Link>
                </div>
                <div className="children-Most-viewed-news-top">
                  <Link href="#">
                    شهرام دبیری از سمت معاونت پارلمانی رئیس‌جمهور برکنار شد
                  </Link>
                </div>
                <div className="children-Most-viewed-news-top">
                  <Link href="#">
                    شهرام دبیری از سمت معاونت پارلمانی رئیس‌جمهور برکنار شد
                  </Link>
                </div>
              </div>
              <div className="Most-viewed-news-bot">
                <div className="children-Most-viewed-news-top">
                  <Link href="#">
                    شهرام دبیری از سمت معاونت پارلمانی رئیس‌جمهور برکنار شد
                  </Link>
                </div>
                <div className="children-Most-viewed-news-top">
                  <Link href="#">
                    شهرام دبیری از سمت معاونت پارلمانی رئیس‌جمهور برکنار شد
                  </Link>
                </div>
                <div className="children-Most-viewed-news-top">
                  <Link href="#">
                    شهرام دبیری از سمت معاونت پارلمانی رئیس‌جمهور برکنار شد
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <OtherImportantNews />

          <div className="other-news">
            {[...Array(6)].map((_, index) => (
              <div className="news" key={index} >
                <Link href={`/news/${index + 12}`} className="children-news" >
                  <div>
                    <Image src={img} width={200} height={120} alt="تصویر خبر" />
                  </div>
                  <div className="news-text">
                    <h3>عراقچی: آرمان فلسطین فراموش شدنی نیست</h3>
                    <p>
                      امام خمینی در ۱۳ رمضان ۱۳۵۸ آخرین جمعه ماه رمضان را به نام روز قدس نامیدند. همان زمان چهره‌هایی چون سیمین دانشور، احمد شاملو و داریوش مهرجویی در بیانیه‌ای از راهپیمایی روز قدس حمایت کردند.
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="photo-news">
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
          </div>
        </div>
      </div>
    </div>
  );
}
