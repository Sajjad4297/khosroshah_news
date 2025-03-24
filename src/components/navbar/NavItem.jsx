'use client'
import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import Link from 'next/link'
export default function NavItem({ topic }) {
    console.log(topic)
    return (

        <div>
            <Dropdown>
                <DropdownTrigger>
                    <button className='text-color' style={{ cursor: 'pointer', background: 'none', border: 'none' }}>
                        {topic.title}
                    </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="دسته‌بندی‌ها"  className="dropdown-menu">
                    {topic.sub_topic.map((sub_topic, i) => (
                        <DropdownItem key={sub_topic.name}>
                            <Link href="/social" className='text-color'>{sub_topic.title}</Link>
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
