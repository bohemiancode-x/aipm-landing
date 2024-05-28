import Image from 'next/image'
import React from 'react'

const LogoCard = ({src, className}) => {
  return (
    <Image
        src={src}
        height={0}
        width={200}
        //fill
        className={className}
        priority
    />
  )
}

export default LogoCard