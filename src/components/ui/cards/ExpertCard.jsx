import Image from 'next/image'
import React from 'react'
import LogoCard from './LogoCard'

const ExpertCard = ({image, companySvg, name, position}) => {
  return (
    <div className='relative overflow-hidden min-w-fit md:w-[30%] rounded-3xl'>
        <Image
            src={image}
            width={800}
            height={0}
            className='w-full'
            alt="expert"
        />
        <div className='text-white absolute bottom-5 left-5'>
            {companySvg}
            <p className='mt-3'>{name}</p>
            <p>{position}</p>
        </div>
    </div>
  )
}

export default ExpertCard