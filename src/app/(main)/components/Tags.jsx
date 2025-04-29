import Link from 'next/link'
import React from 'react'

export default function Tags({value}) {
  return (
    <Link href="#" className='tags'>{value}</Link>
  )
}
