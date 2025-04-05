import Image from "next/image";
import Link from "next/link";
import "./Home.css";
import img from '@/img/slm.png';

export default function Home() {
  return (
    <div className="Home-page">
      <div className="right-page">
        <div className='main'>
          <div className='right-main'>
            <div className='img-side'>
              <Link href="/news/1">
                <Image src={img} width={400} height={250} alt="تصویر خبر" />
              </Link>
            </div>
            <div className='text-side'>
              <p className="p">رضا شاه :</p>
              <h3 className="title">
                <Link href="/news/2" className="children-title">
                  راهپیمایی امسال یکی از باعزت‌ترین راهپیمایی‌های روز قدس خواهد بود
                </Link>
              </h3>
              <p className="discriptions">
                رهبر معظم انقلاب اسلامی فرمودند: إن‌شاءالله راهپیمایی امسال، یکی از بهترین، پرشکوه‌ترین و باعزت‌ترین راهپیمایی‌های روز قدس خواهد بود.
              </p>
            </div>
          </div>
        </div>

        <div className="main-2">
          <div className="top-main">
            {[...Array(6)].map((_, index) => (
              <Link href={`/news/${index + 3}`} key={index} className="children-title">
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
                <div className="children-Most-viewed-news-top2">
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
                <div className="children-Most-viewed-news-top2">
                  <Link href="#">
                    شهرام دبیری از سمت معاونت پارلمانی رئیس‌جمهور برکنار شد
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="Other-important-news">
            <Link href="/important-news" className="Other-important-news-title">سایر اخبار مهم</Link>
          </div>

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
        </div>
      </div>
    </div>
  );
}
