import React from 'react';
import { topics } from '@/app/(main)/data/topics'; // مسیر دیتای تو
import Title from '../(main)/components/Title';
import DynamicPage from '../(main)/components/DynamicPage';
import "./sub-topic.css";


export default function SubTopicPage({ params }) {
  const { name } = params;

  const subTopic = topics
    .flatMap(topic => topic.sub_topic)
    .find(sub => sub.name === name);

  if (!subTopic) {
    return <div>صفحه مورد نظر یافت نشد.</div>;
  }

  const parentTopic = topics.find(topic => topic.id === subTopic.topicId);

  return (
    <div className="sub-topic-page">
      <Title title={subTopic.title} />
      <DynamicPage />
    </div>
  );
}
