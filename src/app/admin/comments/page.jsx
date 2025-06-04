'use client';
import { useState } from "react";
import "./comments.css";
const dummyComments = [
  {
    id: 1,
    name: "علی رضایی",
    email: "ali@email.com",
    content: "مطلب خیلی خوبی بود، ممنون!",
    date: "۱۴۰۴/۰۳/۱۲",
  },
  {
    id: 2,
    name: "نگار محمدی",
    email: "negar@email.com",
    content: "میشه بیشتر در مورد این موضوع بنویسین؟",
    date: "۱۴۰۴/۰۳/۱۳",
  },
];

export default function CommentsAdminPage() {
  const [comments, setComments] = useState(dummyComments);

  const approveComment = (id) => {
    setComments(prev => prev.filter(c => c.id !== id));
  };

  const deleteComment = (id) => {
    setComments(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="container3">
      <h1 className="title">مدیریت نظرات</h1>

      {comments.length === 0 ? (
        <p className="no-comments">نظری برای نمایش وجود ندارد.</p>
      ) : (
        comments.map(comment => (
          <div key={comment.id} className="comment-box">
            <div className="comment-header">
              <div>
                <p className="comment-name">{comment.name}</p>
                <p className="comment-email">{comment.email}</p>
              </div>
              <p className="comment-date">{comment.date}</p>
            </div>

            <p className="comment-content">{comment.content}</p>

            <div className="comment-actions">
              <button className="approve-btn" onClick={() => approveComment(comment.id)}>تأیید</button>
              <button className="delete-btn" onClick={() => deleteComment(comment.id)}>حذف</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
