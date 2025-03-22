import React from 'react'
import './tag.css'
import Link from 'next/link';
export default function Tag({value}) {
  return (
    <Link href='#' className='tag'>{value}</Link>
  )
}
