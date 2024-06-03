'use client'

import { useState, useRef, useEffect } from 'react';
import { expertsData } from './data';
import ExpertCard from '../cards/ExpertCard';

// Data


const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 px-6 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex border border-[red] max-w-[1720px] px-6 justify-between absolute left-0 right-0 m-auto w-full h-full">
          <button
            onClick={movePrev}
            className="text-white w-14 h-14 flex items-center justify-center my-auto border-2 border-white rounded-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className=" text-white w-14 h-14 flex items-center justify-center my-auto border-2 border-white rounded-full opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="container carousel-container relative flex gap-8 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {expertsData.map((resource, index) => {
            return (
                <div
                    key={index}
                    className={`carousel-item w-[1/3] h-[590px] snap-start`}
                >
                    <ExpertCard
                        image={resource.img}
                        name={resource.name}
                        position={resource.title}
                        companySvg={resource.coyLogo}
                    />
                </div>
            //   <div
            //     key={index}
            //     className="carousel-item text-center relative w-[24rem] h-[24rem] snap-start"
            //   >
            //     <a
            //       //href={resource.link}
            //       className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
            //       style={{ backgroundImage: `url(${resource.img || ''})` }}
            //     >
            //       <img
            //         src={resource.img || ''}
            //         alt={resource.title}
            //         className="w-full aspect-square hidden"
            //       />
            //     </a>
            //     <a
            //       //href={resource.link}
            //       className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
            //     >
            //       <h3 className="text-white py-6 px-3 mx-auto text-xl">
            //         {resource.title}
            //       </h3>
            //     </a>
            //   </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;