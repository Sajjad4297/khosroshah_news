import Image from 'next/image';
import img from '@/img/slm.png';
import Link from 'next/link';
import './dynamicPage.css';
import Pagination from './Pagination';

const ITEMS_PER_PAGE = 15;


export default async function dynamicPage({ searchParams, news }) {
  const page = parseInt(searchParams?.page || '1', 10);
  const totalItems = news.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const archiveData = news.slice(start, end);

  return (
    <div>
      <div className='media-container'>
        {archiveData.map(({ id, title, top_title, image, news_lead }) => (
          <Link href={'/news/' + id} key={id} className='media-link'>
            <div className="media-content">
              <Image src={'https://backend.navayetabriz.ir/uploads/' + image} width={140} height={100} alt={title} />
              <div className="media-text">
                <p className='media-ontitle'>{top_title}</p>
                <h3>{title}</h3>
                <p className='media-paragraph'>{news_lead}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>

  );
}
