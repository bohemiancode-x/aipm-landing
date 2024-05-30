import Image from 'next/image'
import React from 'react'

const DetailsSection = () => {
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
            <div className="container my-[5%] flex flex-col-reverse md:flex-row gap-16 justify-center items-center py-24">
            <div className="md:w-[45%] flex flex-col items-center md:items-start md:flex-col gap-5 md:gap-10">
                <h2 className="designed-for-title hidden md:block">Who this course is <br/> designed for</h2>
                <div className="progress flex md:hidden gap-4">
                <span className="active"></span>
                <span></span>
                <span></span>
                </div>
                <ul className="designed-for md:border-t border-[#ffffff] flex gap-5 items-center justify-between text-medium-grey">
                <li className="active">Current Product Managers</li>
                <li>Product Owners</li>
                <li>Business Analysts</li>
                </ul>
                <p className="text-light-grey text-center md:text-start text-sm md:text-base xl:text-lg">
                You are already navigating the complex, rewarding world of product management. Enhance your skills and knowledge in AI, enabling you to effectively prioritize AI investments and drive growth in your organization.
                </p>
            </div>
            <div className="md:w-[45%]">
                <h2 className="designed-for-title mb-8 md:hidden">Who this course is <br/> designed for</h2>
                <Image 
                src='/assets/woman-on-laptop.png'
                width={1500}
                height={0}
                priority
                className="w-[75vw] md:w-fit md:h-[30rem] rounded-2xl"
                />
            </div>
            </div>
        </section>
    </>
  )
}

export default DetailsSection