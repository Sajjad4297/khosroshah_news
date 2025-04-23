// components/TopicSelector.js
import { useState } from 'react';
import styles from './TopicSelector.module.css';
let topicsData;
fetch('http://localhost:5000/api/topics').then(res => res.json()).then(res => topicsData = res.data);
// const topicsData = [
//   {
//     topic: 'Technology',
//     subTopics: ['AI', 'Blockchain', 'Cybersecurity'],
//   },
//   {
//     topic: 'Health',
//     subTopics: ['Nutrition', 'Mental Health', 'Fitness'],
//   },
// ];

export default function TopicSelector() {
    const [selectedTopics, setSelectedTopics] = useState({});
    const [selectedSubTopics, setSelectedSubTopics] = useState({});

    const toggleTopic = (topic) => {
        const newValue = !selectedTopics[topic];
        setSelectedTopics((prev) => ({
            ...prev,
            [topic]: newValue,
        }));
        console.log(selectedTopics,selectedSubTopics)
        // Optional: Clear sub-topics when topic is deselected
        if (!newValue) {
            const updatedSubTopics = { ...selectedSubTopics };
            topicsData
                .find(t => t.id === topic)
                .subTopics.forEach(sub => delete updatedSubTopics[sub.id]);
            setSelectedSubTopics(updatedSubTopics);
        }
    };

    const toggleSubTopic = (subTopic) => {
        setSelectedSubTopics((prev) => ({
            ...prev,
            [subTopic]: !prev[subTopic],
        }));
    };
    return (
        <div className={styles.wrapper}>
            {topicsData?.map(({ id, title, subTopics }) => (
                <div key={id} className={styles.topicBlock}>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            style={{ margin: 3 }}
                            type="checkbox"
                            checked={!!selectedTopics[id]}
                            onChange={() => toggleTopic(id)}
                        />
                        {title}
                    </label>

                    <div className={styles.subTopics} style={{height: selectedTopics[id] ? 'auto' : 0, overflow: 'hidden', transition: 'height 0.3s ease'}}>
                        {subTopics.map((sub) => (
                            <label key={sub.id} style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
                                <input
                                    style={{ margin: 3 }}
                                    type="checkbox"
                                    checked={!!selectedSubTopics[sub.id]}
                                    onChange={() => toggleSubTopic(sub.id)}
                                    disabled={!selectedTopics[id]}
                                />
                                {sub.title}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
