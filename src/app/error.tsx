'use client'
import React, { useEffect } from 'react'

const Error = ({error, reset} : any) => {
    useEffect(()=>{
        console.log(error)},[error]
    )
  return (
    <div className='text-center mt-10'>
      <h1>Hi, something went wrong, Please try again later</h1>
      <button className='hover:text-amber-600' onClick={()=>reset()}>Try again</button>
    </div>
  )
}

export default Error
