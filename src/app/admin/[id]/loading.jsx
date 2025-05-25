'use client'
import { Spin } from 'antd'

export default function Loading() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <Spin size="large" tip="در حال بارگذاری صفحه..." />
    </div>
  )
}
