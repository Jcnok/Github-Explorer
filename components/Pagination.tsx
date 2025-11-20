
import React, { useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = useMemo(() => {
    const pages = [];
    const maxVisibleButtons = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return { startPage, endPage, pages };
  }, [currentPage, totalPages]);

  if (totalPages <= 1) return null;

  const renderButton = (page: number, isActive: boolean = false) => (
    <button
      key={page}
      onClick={() => onPageChange(page)}
      className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 font-medium ${
        isActive
          ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/50'
          : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
      }`}
    >
      {page}
    </button>
  );

  return (
    <div className="flex items-center justify-center gap-2 mt-8 pb-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>
      
      {pageNumbers.startPage > 1 && (
        <>
          {renderButton(1)}
          {pageNumbers.startPage > 2 && (
            <span className="w-10 h-10 flex items-center justify-center text-slate-600">...</span>
          )}
        </>
      )}

      {pageNumbers.pages.map(page => renderButton(page, currentPage === page))}

      {pageNumbers.endPage < totalPages && (
        <>
          {pageNumbers.endPage < totalPages - 1 && (
            <span className="w-10 h-10 flex items-center justify-center text-slate-600">...</span>
          )}
          {renderButton(totalPages)}
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Pagination;
