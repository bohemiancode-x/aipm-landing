import CheckmarkSVG from '@/components/svgs/checkmark'
import React from 'react'

const TuitionSection = () => {
  return (
    <section className="container bg-[url('/assets/tuition-bg-mobile.png')] bg-cover bg-no-repeat md:bg-none flex flex-col md:flex-row  gap-8 justify-center items-center md:items-start py-[20%] md:py-[10%]">
          <div className="info-card text-[#AEB4AE] bg-gradient-green">
              <div className="py-[5%] px-[10%] border-b border-[#F9F9F9]">
                <p className="text-sm sm:text-base md:text-lg font-light">TUITION</p>
                <p className="text-[#2BA7AA] text-3xl sm:text-4xl md:text-6xl font-semibold">$2,420</p>
              </div>
              <div className="px-[10%] py-10 text-sm md:text-base xl:text-lg">
                <p>The tuition for this course includes:</p>
                <ul className="tuition-bd flex flex-col my-3 gap-3">
                  <li>
                    <CheckmarkSVG />
                    <p>A comprehensive learning experience</p>
                  </li>
                  <li>
                    <CheckmarkSVG />
                    <p>Access to expert instructors</p>
                  </li>
                  <li>
                    <CheckmarkSVG />
                    <p>Interactive workshops, and real-world case studies.</p>
                  </li>
                  <li>
                    <CheckmarkSVG />
                    <p>Opportunity to connect with a community of like-minded professionals and industry leaders</p>
                  </li>
                  <li>
                    <CheckmarkSVG />
                    <p>Receive ongoing support and resources to help you stay up-to-date on the latest trends and advancements in AI.</p>
                  </li>
                </ul>
              </div>
          </div>
          <div className="info-card flex flex-col min-h-full">
            <div className="relative h-full p-5 bg-[url('/assets/cohort-date-bg.png')] bg-cover bg-no-repeat">
              <div className="min-h-full flex flex-col gap-3 text-start top-5 left-5">
                <p className="text-black text-sm md:text-base font-light">JOIN THE NEXT COHORT</p>
                <p className="text-white font-medium text-4xl md:text-5xl">July 15, 2024</p>
              </div>
            </div>
            <div className="bg-gradient-green mb-auto py-5 text-[#2BA7AA] text-center md:text-lg">
              <p>Join Next Cohort</p>
            </div>
          </div>
      </section>
  )
}

export default TuitionSection