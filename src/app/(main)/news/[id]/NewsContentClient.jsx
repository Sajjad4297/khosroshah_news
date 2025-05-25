'use client'
import React, { useEffect, useState } from 'react'

const NewsContentClient = ({ html }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div
      className='text-side2'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default NewsContentClient
