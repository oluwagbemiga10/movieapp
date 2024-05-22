import React from 'react'
import Headeritem from './headeritem'

const Header = () => {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
      <Headeritem title='Trending' param='fetchTrending' />
      <Headeritem title='Top Rated' param='fetchTopRated' />
    </div>
  )
}

export default Header
