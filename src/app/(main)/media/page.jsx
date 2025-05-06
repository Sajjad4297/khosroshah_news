import Image from 'next/image';
import img from '@/img/slm.png';
import Link from 'next/link';
import './media.css';
import Pagination from './Pagination';
import { on } from 'events';

const ITEMS_PER_PAGE = 15;

const allArchiveData = Array.from({ length: 60 }, (_, index) => ({
  id: index + 1,
  ontitle: "جمهوری اسلامی ایران",
  title: "آیا با انتقال اموال به نام دیگران می‌توان از پرداخت بدهی فرار کرد؟",
  text: " اگر بدهکار قبل از صدور حکم دادگاه، اموال خود را به قصد فرار از دِین (بدهی) به شخص دیگری منتقل کند، طلبکار می‌تواند درخواست ابطال این انتقال را ارائه دهد.",
  img: img,
}));

export default async function Media({ searchParams }) {
  const page = parseInt(searchParams.page || '1', 10);
  const totalItems = allArchiveData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const archiveData = allArchiveData.slice(start, end);

  return (
    <div className='media-container'>
      <div className='media-header'>
        <div className="archive-bar">
          <div className="archive-label">ارشیو - خبر گذاری نوای تبریز</div>
        </div>
      </div>

      {archiveData.map(({ id, title, text, ontitle }) => (
        <Link href="#" key={id} className='media-link'>
          <div className="media-content">
            <Image src={img} width={140} height={100} alt="media" />
            <div className="media-text">
              <p className='media-ontitle'>{ontitle}</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        </Link>
      ))}

      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  );
}
