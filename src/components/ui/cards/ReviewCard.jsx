import React from 'react'

const ReviewCard = () => {
  return (
    <div className="review-card bg-review-card-bg-mobile md:bg-review-card-bg bg-cover bg-no-repeat w-[90%] sm:w-[75%] md:w-[60%] text-white p-[7%] rounded-3xl">
        <p className="text-[20px] md:text-[24px] text-center md:text-start">
            "This program offered a comprehensive exploration of AI and machine learning. I've gained insights into the functioning of machine learning and the intricate challenges it presents, particularly the ethical aspects that are crucial when creating products that incorporate AI or machine learning."
        </p>
        <div className="mt-10 text-sm flex flex-col items-end gap-1">
        <p className='mr-10'> — Iyanuoluwa Odebode</p>
        <p className="text-light-green">Head of Product, Perplexity</p>
        </div>
    </div>
  )
}

export default ReviewCard