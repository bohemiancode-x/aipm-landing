import Image from 'next/image'
import React from 'react'

const ExpertCard = ({image, companySvg, name, position}) => {
  return (
    <div className='relative aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 overflow-hidden rounded-3xl'>
        <Image
            src={image}
            width={1200}
            height={0}
            className='w-full'
            alt="expert"
        />
        <div className='text-white text-[20px] absolute bottom-7 left-7'>
            {/* {companySvg} */}
            <Image src={companySvg} width={500} height={0} className='w-fit' alt='logo' />
            <p className='mt-5'>{name}</p>
            <p>{position}</p>
        </div>
    </div>
  )
}

export default ExpertCard