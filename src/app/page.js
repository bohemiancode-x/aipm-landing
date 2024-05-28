import LearnCard from "@/components/ui/cards/LearnCard";
import LogoCard from "@/components/ui/cards/LogoCard";
import Navbar from "@/components/ui/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <div className="container my-[5%] mb-20 md:mb-10 lg:mb-5">
        <div className="flex flex-col lg:px-10 gap-5 items-start">
          <h1 className="font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.25] text-grey-green">Lead the future. <br/> Become an <br/> <span className="text-light-green">AI Product Manager</span></h1>
          <p className="text-base lg:text-lg text-grey-green lg:w-[45%]">
            Gain the essential skills to manage AI and machine learning products through our practical, 6-weeks live-streamed course. Learn how to effectively bridge the gap between AI and user experience to deliver successful AI-driven products.
          </p>
          <button className="cta-button font-normal px-5 py-4 md:px-7 lg:px-10 lg:py-6 text-lg lg:text-xl">Join the next cohort July 15, 2024</button>
        </div>
      </div>

      <Image
          src='/assets/hero-img.png'
          width={1400}
          height={0}
          priority
          className="hidden sm:block w-[90%] h-full mx-auto rounded-2xl my-6"
        />
        <Image
          src='/assets/hero-bg-mobile.png'
          width={1400}
          height={0}
          priority
          className="sm:hidden w-full h-fit mx-auto rounded-2xl my-6"
        />

      <div className="container my-[5%]">
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
      </div>

      <div className="bg-dark-green">
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
      </div>

      <div className="container py-[5%] pb-[10%] my-[5%]">
        <h2 className="text-center md:text-start text-3xl sm:text-4xl lg:text-5xl text-dark-green">What you will learn</h2>
        <div className="py-[10%] flex flex-col md:grid gap-10 md:gap-20 items-center md:grid-cols-2">
          <LearnCard
            module='one'
            title='AI foundational knowledge'
            text='Understand the fundamentals of AI, machine learning, and deep learning, and their applications in product management.'
          />
          <LearnCard
            module='two'
            title='Identify AI opportunities'
            text='Identify potential uses for AI in a product and assess their feasibility and value proposition, aligning with business goals and objectives.'
          />
          <LearnCard
            module='three'
            title='Design for AI'
            text='A dynamic ecosystem, bringing together instructors, students, and alumni to propel collective progress.'
          />
          <LearnCard
            module='four'
            title='Build AI product - deep dive'
            text='Understand the fundamentals of AI, machine learning, and deep learning, and their applications in product management.'
          />
          <LearnCard
            module='five'
            title='Present your AI Products'
            text='Identify potential uses for AI in a product and assess their feasibility and value proposition, aligning with business goals and objectives.'
          />
          <LearnCard
            module='six'
            title='Career guidance'
            text='A dynamic ecosystem, bringing together instructors, students, and alumni to propel collective progress.'
          />
        </div>
      </div>
      
      <section className="relative bg-insights-bg bg-cover bg-no-repeat">
        <div className="md:container md:absolute md:-top-[12%] m-auto left-0 right-0 my-[5%] lg:my-0">
          <div className="bg-gradient-green flex flex-col-reverse gap-8 text-center md:flex-row justify-between items-center md:rounded-2xl  py-[10%] md:py-2 p-2">
            <div className="md:w-[45%] w-[75%]">
              <Image
                src='/assets/course-module-gradient.png'
                width={1500}
                height={0}
                priority
                className="md:w-full rounded-2xl"
                alt='course module image'
              />
              <button className="my-5 mx-auto md:hidden block rounded-full text-[#F1F1F1]  border-[1.5px] border-[#F1F1F1] px-4 py-2 text-sm">Download Syllabus</button>
            </div>
            <div className="md:w-[45%] flex flex-col gap-5 md:items-start md:text-start justify-around">
              <h3 className="course-module-h2 text-2xl md:text-3xl">See the course <br/> modules in finer detail</h3>
              <p className="text-[#F1F1F1] px-5% sm:px-[15%] md:px-0 text-sm md:text-lg md:mr-[15%]">
                The detailed syllabus for the Artificial Intelligence Product Management module is publicly available, so that there is complete clarity about what is covered.
              </p>
              <button className="hidden md:block rounded-full text-[#F1F1F1]  border-[1.5px] border-[#F1F1F1] px-4 py-2 text-sm">Download Syllabus</button>
            </div>
          </div>
        </div>
        <div className="container items-center text-center md:text-start md:items-start pt-[30%] pb-[5%]">
            <h2 className="bg-text-gradient text-4xl md:text-5xl py-4">Gain invaluable insights<br/> from leading figures in the<br/> AI industry</h2>
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
    </main>
  );
}
