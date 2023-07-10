import React from 'react'
import Image from 'next/image'
export default function loading() {
  return (
    <div className='flex justify-center items-center'>
      <Image width={250} height={250} src='spinner.svg' alt= "Loading..."/>
    </div>
  )
}