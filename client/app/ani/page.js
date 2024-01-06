import React from 'react'
import Image from 'next/image'
import PlantGif from '../public/PlantGif.gif'

const page = () => {
  return (
    <div >
        <Image src={PlantGif} alt="my gif" height={200} width={200} />
    </div>
  )
}

export default page