'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './ArrowButtons'
import { DotButton, useDotButton } from './DotButton'
import { Reviews } from '../data'

const ReviewCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)


  return (
    <div className="embla relative">
      <div className="embla__viewport container" ref={emblaRef}>
        <div className="embla__container md:gap-4">
          {Reviews && Reviews.map((resource, index) => (
            <div key={index} className="embla___slide embla__class-names flex-[0_0_90%] sm:flex-[0_0_75%] md:flex-[0_0_80.3%] bg-review-card-bg-mobile md:bg-review-card-bg bg-cover bg-no-repeat text-white p-[7%] rounded-3xl">
                <p className="px-[5%] md:px-[10%] text-[20px] md:text-[24px] text-center md:text-start">
                    "{resource.review}"
                </p>
                <div className="mt-10 text-sm md:text-base flex flex-col items-end gap-1">
                <p className='mr-10'> — {resource.name}</p>
                <p className="text-light-green">{resource.position}</p>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* arrow buttons */}
    <div className="embla__buttons hidden md:flex md:max-w-[99%] xl:max-w-[90%] px-6 justify-between absolute top-[50%] left-0 right-0 m-auto">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>

    {/* dot buttons */}
      <div className="flex md:hidden mt-[1.8rem] container">
        <div className="m-auto gap-2 flex">
          {scrollSnaps && scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReviewCarousel
