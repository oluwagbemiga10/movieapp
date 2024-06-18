'use client'
import React from 'react'
import {ThemeProvider} from 'next-themes'

const Providers = ({children}:any) => {
  return (
    <ThemeProvider defaultTheme='system'>
        <div className='text-gray-700 dar:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300'>
            {children}
        </div>
    </ThemeProvider>
   
  )
}

export default Providers
