// فرض می‌کنیم این فایل در مسیر: components/SearchModal/SearchModal.js قرار دارد
"use client";
import React, { useState, useEffect } from 'react';
import styles from './SearchModal.module.css'; // فایل CSS که در مرحله بعد ایجاد می‌کنیم

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // برای جلوگیری از اسکرول صفحه اصلی وقتی مودال باز است
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // پاکسازی در زمان unmount شدن کامپوننت
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // اگر مودال باز نیست، چیزی رندر نکن
  if (!isOpen) {
    return null;
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // اینجا منطق جستجوی واقعی شما قرار می‌گیرد
    // برای مثال: router.push(`/search?q=${searchTerm}`);
    console.log("عبارت جستجو شده:", searchTerm);
    setSearchTerm(''); // پاک کردن فیلد جستجو
    onClose(); // بستن مودال پس از جستجو
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="بستن مودال">
          &times; {/* این یک کاراکتر ضربدر است */}
        </button>
        <h3 className={styles.modalTitle}>جستجو در سایت</h3>
        <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
          <input
            type="search" // تغییر به type="search" برای نمایش دکمه پاک کردن در برخی مرورگرها
            placeholder="چه چیزی در ذهن دارید؟"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
            autoFocus // فوکوس خودکار روی فیلد هنگام باز شدن
          />
          <button type="submit" className={styles.searchButton}>
            بگرد
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchModal;