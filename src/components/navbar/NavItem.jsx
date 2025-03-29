import Link from 'next/link'


export default function NavItem({ topic }) {


    return (
        <div className='nav-item'>
            {topic.title}
            <div className="drop-down">
                {topic.sub_topic.map((sub_topic, i) => (
                    <p key={i}>
                        <Link href={sub_topic.name} className='text-color'>{sub_topic.title}</Link>
                    </p>

                ))}
            </div>
        </div>
    )
}
