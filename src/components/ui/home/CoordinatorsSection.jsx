import React from 'react'
import Image from 'next/image'
import GuestsCarousel from '../carousel/embla-carousel/GuestsCarousel'


const CoordinatorsSection = () => {
  return (
    <section className="bg-[url('/assets/instructor-bg-mobile.png')] bg-cover bg-no-repeat md:bg-[#012528] pb-[10%]">
        <div className="container py-[10%]">
            <div>
            <h2 className="course-module-h2 my-10 text-4xl md:text-5xl py-4 text-center">Your coordinating instructor</h2>
            <div className="flex flex-col gap-6 lg:flex-row justify-between md:bg-coordinator-card-bg bg-cover bg-no-repeat rounded-3xl">
                <div className="aspect-[1/1] md:mx-auto lg:mx-0 md:w-[50%] lg:w-[40%]">
                <Image
                    src='/assets/iyanu-odebode.png'
                    width={1200}
                    height={0}
                    className="w-full rounded-3xl"
                    alt='iyanu'
                />
                </div>
                <div className="md:text-center md:px-8 md:py-2 lg:px-0 lg:py-0 lg:w-[50%] text-center lg:text-start h-full text-white flex flex-col m-auto gap-5">
                <h2 className="text-2xl md:text-3xl">Iyanuoluwa Odebode, PhD</h2>
                <p className="text-white md:text-lg">
                    Iyanuoluwa is an ethical AI/ML expert with over 10 years of experience. He prioritizes responsible AI practices, ensuring fairness, transparency, and ethical considerations in his work. He has led cross-functional teams, developed enterprise-level ML products, and managed deployment pipelines with a focus on ethical AI principles. His projects include AI applications, chatbots, and counterfeit detection prototypes. He researches the intersection of technology and public health, focusing on the opioid crisis, and is developing sensor technology for opioid detection, aiming to revolutionize harm reduction efforts while adhering to ethical principles.
                </p>
                </div>
            </div>
            </div>
        </div>
        <div className="pb-[5%]">
            <h2 className="container course-module-h2 my-10 text-4xl md:text-5xl py-4 text-center">
                Guest Experts
            </h2>
            <GuestsCarousel />
        </div>
    </section>
  )
}

export default CoordinatorsSection