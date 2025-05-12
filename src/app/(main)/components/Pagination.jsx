'use client'; 
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import './pagination.css';

export default function Pagination({ totalPages }) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1');

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination-wrapper">
      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={`?page=${page}`}
          className={`page-button ${currentPage === page ? 'active' : ''}`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}
