import React from 'react'
import Accordion from '../accordion/Accordion'
import { data } from '../accordion/data'
import ReviewCard from '../cards/ReviewCard'

const FAQandReviews = () => {
  return (
    <section className="bg-reviews-bg-mobile md:bg-none bg-cover bg-no-repeat">
        <section className="md:bg-reviews-bg bg-cover bg-no-repeat">
          <div className="container py-[5%]">
            <h1 className="text-4xl text-center md:text-start py-[5%] md:text-5xl xl:text-6xl bg-gradient-to-r bg-clip-text text-transparent from-light-green to-[#cbf7f9] md:from-dark-green md:to-[#04838E] from-[1%] to-[100%]">What participants say<br className="hidden md:block"/> about our training</h1>
            <div className="reviews flex flex-col md:flex-row gap-5 items-center my-[5%]">
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
        </section>

        <section className="md:bg-dark-green">
          <div className="container overflow-hidden flex flex-col md:flex-row justify-between items-center md:items-start py-[5%]">
            <div className="md:w-[30%]">
              <h1 className="hidden md:block bg-gradient-to-r bg-clip-text text-transparent from-light-green to-[#cbf7f9] from-[0%] to-[100%] text-6xl">FAQ</h1>
              <h1 className="md:hidden bg-gradient-to-r bg-clip-text text-transparent from-light-green to-[#cbf7f9] from-[0%] to-[100%] text-center text-3xl sm:text-4xl my-5 ">Frequently Asked Questions</h1>
            </div>
            <div className="w-[90%] sm:w-[75%] md:w-[65%]">
              <Accordion data={data} />
            </div>
          </div>
        </section>
      </section>
  )
}

export default FAQandReviews