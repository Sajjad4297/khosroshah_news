'use client'
import React from 'react'
import { Dropdown, DropdownTrigger , DropdownMenu , DropdownItem } from "@nextui-org/react";
export default function dropDown() {
    return (

        <div>
            <Dropdown>
                <DropdownTrigger>
                    <button className='text-color' style={{ cursor: 'pointer', background: 'none', border: 'none' }}>
                        دسته‌بندی‌ها ⬇
                    </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="دسته‌بندی‌ها" className="dropdown-menu">
                    <DropdownItem key="social">
                        <Link href="/social" className='text-color'>اجتماعی</Link>
                    </DropdownItem>
                    <DropdownItem key="politics">
                        <Link href="/politics" className='text-color'>سیاسی</Link>
                    </DropdownItem>
                    <DropdownItem key="economy">
                        <Link href="/economy" className='text-color'>اقتصادی</Link>
                    </DropdownItem>
                    <DropdownItem key="sports">
                        <Link href="/sports" className='text-color'>ورزشی</Link>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
