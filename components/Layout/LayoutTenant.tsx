import React from 'react'

interface Props {
  children: React.ReactNode
}

const LayoutTenant = ({ children }: Props) => {
  return (
    <main className='bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative'>
      <h1>Layout Tenant</h1>
      {children}
    </main>
  )
}

export default LayoutTenant
