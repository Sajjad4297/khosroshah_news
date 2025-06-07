import Link from 'next/link'
import React from 'react'

export default function Tags({value,link}) {
  return (
    <Link href={"/tags/"+link} className='tags'>{value}</Link>
  )
}
