import React from 'react'
import LogoCard from '../cards/LogoCard'
import Image from 'next/image'

const CourseModule = () => {
  return (
    <section className="relative bg-insights-bg bg-cover bg-no-repeat">
        <div className="md:container md:absolute md:-top-[12%] m-auto left-0 right-0 my-[5%] lg:my-0">
          <div className="bg-course-module-bg-mobile md:bg-course-module-bg bg-cover bg-no-repeat flex flex-col-reverse gap-8 text-center md:flex-row justify-between items-center md:rounded-2xl  py-[10%] md:py-2 p-2">
            <div className="md:w-[45%] w-full">
              <Image
                src='/assets/course-module-gradient.png'
                width={1500}
                height={0}
                priority
                className="hidden md:block md:w-full rounded-2xl"
                alt='course module image'
              />
              <Image
                src='/assets/course-module-gradient-mobile.png'
                width={1500}
                height={0}
                priority
                className="w-full container md:hidden rounded-2xl"
                alt='course module image'
              />
              <button className="my-5 mx-auto md:hidden block rounded-full text-[#F1F1F1]  border-[1.5px] border-[#F1F1F1] px-4 py-2 text-sm">Download Syllabus</button>
            </div>
            <div className="md:w-[45%] flex flex-col gap-5 md:items-start md:text-start justify-around">
              <h3 className="course-module-h2 text-2xl md:text-3xl">See the course <br/> modules in finer detail</h3>
              <p className="text-[#F1F1F1] px-5 sm:px-[15%] md:px-0 text-sm md:text-lg md:mr-[15%]">
                The detailed syllabus for the Artificial Intelligence Product Management module is publicly available, so that there is complete clarity about what is covered.
              </p>
              <button className="hidden md:block rounded-full text-[#F1F1F1]  border-[1.5px] border-[#F1F1F1] px-4 py-2 text-sm">Download Syllabus</button>
            </div>
          </div>
        </div>
        <div className="container items-center text-center md:text-start md:items-start pt-[30%] pb-[5%]">
            <h2 className="bg-text-gradient text-4xl md:text-5xl py-4">Gain invaluable insights<br className="hidden sm:block" /> from leading figures in the<br className="hidden sm:block" /> AI industry</h2>
            <p className="text-[#5F5E5E] md:w-[60%] text-base md:text-lg">
              Leverage their deep knowledge and experience to develop the skills you need to successfully bridge the gap between AI technology and user needs. Our guest instructors work with some of the leading companies building AI today.
            </p>
            <div className="md:w-[60%] my-14 grid grid-cols-3 gap-6">
              <LogoCard src='/assets/cohere-logo.png' className='w-28' />
              <LogoCard src='/assets/scale-logo.png' className='w-24' />
              <LogoCard src='/assets/mistral-logo.png' className='w-28' />
              <LogoCard src='/assets/google-logo.png' className='w-28' />
              <LogoCard src='/assets/glean-logo.png' className='w-24' />
              <LogoCard src='/assets/perplexity-logo.png' className='w-28' />
            </div>
            <div className="py-[10%] md:w-[60%]">
              <h2 className="text-light-green text-4xl md:text-5xl"><span className="text-grey-green">Get Certified:</span> AI Product<br className="hidden md:block" /> Manager Certificate</h2>
              <p className="text-base md:text-lg my-16 text-[#5F5E5E]">
                Upon successful completion of the AI Product Management program, you will be awarded a certificate of completion. This certificate serves as a testament to the comprehensive training received in AI product development, including hands-on experience with agile methodologies, large language models, and low-code tools
              </p>
            </div>
        </div>
    </section>
  )
}

export default CourseModule