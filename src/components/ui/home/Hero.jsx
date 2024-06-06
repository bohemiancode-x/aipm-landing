import React from 'react'

const Hero = () => {
  return (
    <div className="container my-[5%] mb-20 md:mb-10 lg:mb-5">
        <div className="flex flex-col lg:px-10 gap-5 items-start">
          <h1 className="font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.25] text-grey-green">Lead the future. <br/> Become an <br/> <span className="text-light-green">AI Product Manager</span></h1>
          <p className="text-base font-light lg:text-lg text-grey-green lg:w-[45%]">
            Gain the essential skills to manage AI and machine learning products through our practical, 6-weeks live-streamed course. Learn how to effectively bridge the gap between AI and user experience to deliver successful AI-driven products.
          </p>
          <button className="cta-button font-light px-5 py-4 md:px-7 lg:px-10 lg:py-6 text-lg lg:text-xl mt-5 lg:mt-10">Join the next cohort July 15, 2024</button>
        </div>
    </div>
  )
}

export default Hero