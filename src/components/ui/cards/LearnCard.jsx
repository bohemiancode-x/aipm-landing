import Image from 'next/image'
import React from 'react'

const LearnCard = ({ module, title, text}) => {
  return (
    <div className="flex flex-col items-center text-center md:text-start md:flex-row  md:items-start gap-3 md:gap-5">
        <Image 
            src={`/assets/module-${module}.png`}
            width={800}
            height={0}
            priority
            className="w-28 h-28 md:w-32 md:h-32"
            alt='image'
        />
        <div className="flex flex-col gap-3 md:gap-5 text-base sm:text-lg">
            <h4 className="font-semibold text">{title}</h4>
            <p className='px-[5%] sm:px-[20%] md:px-0'>{text}</p>
        </div>
    </div>
  )
}

export default LearnCard