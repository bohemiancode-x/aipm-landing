import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className='bg-white sticky top-0 z-[99]'>
        <nav className='max-w-[1440px] mt-3 px-8 lg:px-12 mx-auto flex justify-between items-center'>
            <div className='w-[60%] py-4 sm:w-fit'>
                <Image
                    src='/assets/full_logo.svg'
                    width={300}
                    height={0}
                    priority
                    className='w-full h-full'
                    alt='logo'
                />
            </div>
            <div className='hidden py-6  lg:flex lg:text-sm xl:text-base items-center justify-between text-black gap-3 xl:gap-5'>
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