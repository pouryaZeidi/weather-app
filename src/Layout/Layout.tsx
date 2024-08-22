// components/Layout.js
import BackgroundChanger from '@/components/BackgroundChanger'
import React from 'react'

const Layout = ({ children }:{children:any}) => {
  return (
    <div className="relative min-h-screen">
      <BackgroundChanger/>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default Layout
