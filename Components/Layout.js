import React from 'react'

function Layout({children}) {
  return (
      <div className='md:p-4 lg:flex flex-col'>
        {children}
      </div>
  )
}

export default Layout