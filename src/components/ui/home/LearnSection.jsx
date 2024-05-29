import React from 'react'
import LearnCard from '../cards/LearnCard'

const LearnSection = () => {
  return (
    <section className="container py-[5%] pb-[10%] my-[5%]">
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
    </section>
  )
}

export default LearnSection