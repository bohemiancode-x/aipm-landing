import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className='bg-white sticky top-0 z-[99]'>
        <nav className='max-w-[1440px] px-8 lg:px-12 py-6 mx-auto flex justify-between items-center'>
            <div className='flex gap-3 items-center text-xs sm:text-sm md:text-base lg:text-sm'>
                <Image
                    src='/assets/aipm-logo.png'
                    width={300}
                    height={0}
                    priority
                    className='w-[5rem] sm:w-[7rem] md:w-[9rem] lg:w-[7rem] xl:w-fit h-full'
                />
                <p className='text-[#19343F] leading-none border-l border-[#2BA7AA] px-2 lg:px-2 xl:px-3 w-full font-semibold'>The Artificial Intelligence <br/> Product Management School</p>
            </div>
            <div className='hidden lg:flex lg:text-sm xl:text-base items-center justify-between text-black gap-5'>
                <ul className='navlinks bg-[#eeeeee] rounded-full flex gap-2 xl:gap-3'>
                    <li className='active'>Overview</li>
                    <li>Syllabus</li>
                    <li>Certification</li>
                    <li>Instructors</li>
                    <li>Tuition</li>
                    <li>FAQs</li>
                </ul>
                <button className='cta-button-nav'>
                    <p>Join Next Cohort</p>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar