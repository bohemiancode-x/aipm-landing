'use client'

import { useState } from 'react'
import Image from 'next/image'
import React from 'react'

const Tabs = ['Current Product Managers', 'Product Owners', 'Business Analysts']

const DetailsSection = () => {
    const [activeTab, setActiveTab] = useState(Tabs[0])


  return (
    <>
        <section className="container my-[5%] md:my-[9%]">
            <div className="flex flex-col gap-14 md:flex-row justify-around items-center text-grey-green text-lg py-10">
            <div className="feature-card">
                <Image
                src='/assets/hands-on.png'
                width={100}
                height={0}
                className="w-16 h-16"
                alt="icon"
                />
                <p className="font-medium">Hands-on training</p>
                <p>Tackle real-world challenges with industry mentorship as you learn AI product management.</p>
            </div>
            <div className="feature-card">
                <Image
                src='/assets/live-sessions.png'
                width={100}
                height={0}
                className="w-16 h-16"
                alt="icon"
                />
                <p>Live sessions</p>
                <p>Sessions are fully live-streamed and recorded, allowing you to revisit the content at your convenience.</p>
            </div>
            <div className="feature-card">
                <Image
                src='/assets/community.png'
                width={100}
                height={0}
                className="w-16 h-16"
                alt="icon"
                />
                <p>A Thriving Community</p>
                <p>A dynamic ecosystem, bringing together instructors, students, and alumni to propel collective progress.</p>
            </div>
            </div>
        </section>

        <section className="bg-dark-green">
            <div className="container my-[5%] flex flex-col-reverse md:flex-row gap-16 justify-center md:justify-between items-center py-24">
            <div className="md:w-[45%] lg:w-[50%] flex flex-col items-center md:items-start md:flex-col gap-5 md:gap-10">
                <h2 className="designed-for-title hidden md:block">Who this course is <br className='hidden xl:block'/> designed for</h2>
                <ul className="designed-for flex gap-4 md:gap-0 items-center justify-between text-medium-grey">
                    {Tabs && Tabs?.map((item, index) => (
                        <li key={index} onClick={() => setActiveTab(item)} className={activeTab === item ? 'active' : ''}>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
                <div className='tab'>
                    {activeTab === 'Current Product Managers' && (<h3>Current product managers</h3>)}
                    {activeTab === 'Product Owners' && (<h3>product owners</h3>)}
                    {activeTab === 'Business Analysts' && (<h3>business analysts</h3>)}
                    <p className="text-light-grey text-center md:text-start text-sm sm:text-base lg:text-[20px]">
                    You are already navigating the complex, rewarding world of product management. Enhance your skills and knowledge in AI, enabling you to effectively prioritize AI investments and drive growth in your organization.
                    </p>
                </div>
            </div>
            <div className="w-full md:w-[45%] lg:w-[50%]">
                <h2 className="designed-for-title text-center mb-8 md:hidden">Who this course is <br/> designed for</h2>
                <Image 
                src='/assets/woman-on-laptop.png'
                width={1500}
                height={0}
                priority
                className="w-full rounded-2xl"
                alt='woman-on-laptop'
                />
            </div>
            </div>
        </section>
    </>
  )
}

export default DetailsSection