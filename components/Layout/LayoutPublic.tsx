import React from 'react'

interface Props {
  children: React.ReactNode
}

const LayoutPublic = ({ children }: Props) => {
  return (
    <main className='bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative'>
      Layout Public
      {children}
    </main>
  )
}

export default LayoutPublic
