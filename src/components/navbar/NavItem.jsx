import Link from "next/link";

function NavItem({ topic }) {
  const noDropdownTopics = ['photo', 'video', 'user-voice'];
  const isDropdown = topic.sub_topic && topic.sub_topic.length > 0 && !noDropdownTopics.includes(topic.name);

  return (
    <div className={`nav-item ${isDropdown ? 'has-dropdown' : 'no-dropdown'}`}>
      {isDropdown ? (
        <>
          <span>{topic.title}</span>
          <div className="drop-down">
            {topic.sub_topic.map((sub, i) => (
              <p key={i}>
                <Link href={`/${sub.name}`} className="text-color">
                  {sub.title}
                </Link>
              </p>
            ))}
          </div>
        </>
      ) : (
        <Link href={`/${topic.name}`} className="text-color">
          {topic.title}
        </Link>
      )}
    </div>
  );
}

export default NavItem;
