import React from 'react'
import Link from 'next/link'

interface Props{
    title: string
    address: string
}

const Menuitem = ({title, address}: Props) => {
  return (
    <div>
      <Link href={address} className='hover:text-amber-500'>
        <p className='uppercase inline text-sm'>{title}</p>
      </Link>
    </div>
  )
}

export default Menuitem
