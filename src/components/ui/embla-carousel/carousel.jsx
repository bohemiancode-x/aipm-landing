'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './ArrowButtons'
import { DotButton, useDotButton } from './DotButton'
import { expertsData } from '../carousel/data'
import Image from 'next/image'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  
//   const logSlidesInView = () => {
//     console.log(emblaApi.slidesInView())
//   }

//   useEffect(() => {
//     if (emblaApi) emblaApi.on('slidesInView', logSlidesInView)
//   }, [emblaApi, logSlidesInView])

  return (
    <div className="embla relative">
      <div className="embla__viewport container" ref={emblaRef}>
        <div className="embla__container flex">
          {expertsData.map((resource, index) => (
            <div className="embla__slide relative flex-[0_0_85%] sm:flex-[0_0_65%] md:flex-[0_0_48.3%] lg:flex-[0_0_40.3%] xl:flex-[0_0_38%]" key={index}>
                <div className="embla__slide" key={index}>
                    <img
                        className="embla__slide__img"
                        src={resource.img}
                        alt="carousel image"
                    />
                </div>
                <div className='text-white text-[20px] absolute bottom-7 left-14'>
                    {/* {companySvg} */}
                    <Image src={resource.coyLogo} width={500} height={0} className='w-fit' alt='logo' />
                    <p className='mt-5'>{resource.name}</p>
                    <p>{resource.title}</p>
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
          {scrollSnaps.map((_, index) => (
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

export default EmblaCarousel
