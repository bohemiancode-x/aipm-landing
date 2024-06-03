"use client"

import ArrowUp from '@/components/svgs/ArrowUp';
import Logo from '@/components/svgs/Logo';
import CopyrightSVG from '@/components/svgs/copyright';
import Image from 'next/image'
import React from 'react'

const Footer = () => {

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    };

  return (
    <section className="bg-footer-bg-mobile md:bg-footer-bg bg-cover bg-no-repeat">
        <div className="container pt-[5%] pb-6">
          <div className="my-[10%] md:my-[15%]">
            <div className="hidden p-3 md:flex flex-row-reverse justify-between md:bg-gradient-to-bl from-[#012528] to-[#04838E] from-[100%] to-[1%] rounded-3xl">
                  <div className="md:w-[45%]">
                    <Image
                        src='/assets/hands-together.png'
                        width={1200}
                        height={0}
                        className="w-full rounded-3xl"
                    />
                  </div>
                  <div className="md:w-[45%] text-start h-full flex flex-col m-auto gap-6">
                    <h2 className="text-4xl course-module-h2">Join the next cohort</h2>
                    <h2 className="text-white text-5xl xl:text-6xl">Jul 15, 2024</h2>
                    <button className="w-fit bg-light-green rounded-full text-3xl text-dark-green px-8 py-4">Join Now</button>
                  </div>
              </div>
              <div className="md:hidden flex flex-col gap-3 items-center">
                    <h2 className="text-2xl bg-text-gradient font-light">Join the next cohort</h2>
                    <h2 className="text-dark-green text-5xl font-semibold">Jul 15, 2024</h2>
                    <button className="bg-gradient-green rounded-full text-3xl px-8 py-4">
                      <p className="course-module-h2 font-semibold text-xl">Join Now</p>
                    </button>
              </div>
          </div>
          <div className="footer mt-[5%]">
            <div className="border-b border-[#5F5E5E] py-12">
                <div className="flex justify-between">
                  <div className='hidden md:block'>
                    <Image
                        src='/assets/full_logo.svg'
                        width={300}
                        height={0}
                        priority
                        className='w-full h-full'
                        alt='logo'
                    />
                  </div>
                  <ul className="hidden lg:flex md:text-sm xl:text-base gap-4 ml-auto text-black">
                    <li>Overview</li>
                    <li>Syllabus</li>
                    <li>Certification</li>
                    <li>Instructors</li>
                    <li>Tuition</li>
                    <li>FAQs</li>
                  </ul>
                  <span className='md:hidden'>
                    <Logo />
                  </span>
                  <button onClick={ScrollToTop} className="text-xl flex md:hidden items-center gap-3">
                    <ArrowUp />
                    <p>Go back up</p>
                  </button>
                </div>
                <div className="text-black text-sm my-6 md:w-[45%] xl:w-[40%]">
                  <p>
                    AIPM School designs learning experiences that empower individuals to excel and remain competitive in an increasingly AI-driven landscape. Through our AI Product Management program, we challenge participants to develop critical skills, adapt to technological advancements, and lead in the evolving field of artificial intelligence.
                  </p>
                </div>
            </div>
            <div className="mt-5 flex gap-2 items-start">
              <CopyrightSVG />
              <p className="text-sm text-black">Copyright 2024</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Footer