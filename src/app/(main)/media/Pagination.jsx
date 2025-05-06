// components/Pagination.jsx
import Link from 'next/link';
import './pagination.css';

export default function Pagination({ currentPage, totalPages }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination-wrapper">
      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={`/media?page=${page}`}
          className={`page-button ${currentPage === page ? 'active' : ''}`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}
