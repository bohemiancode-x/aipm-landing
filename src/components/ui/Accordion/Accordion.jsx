"use client";

import React, { useState } from 'react';

const Accordion = ({ data, className }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (index !== openAccordion) {
        setOpenAccordion(index);
     } else {
       setOpenAccordion(null);
    }
  };

  return (
    <div className='accordion-container overflow-hidden min-h-screen md:min-h-[90vh] xl:min-h-[85vh]'>
          <ul className='flex flex-col gap-2'>
          {data && data.map((accordion) => (
              <div key={accordion.id} className={`relative py-2 border-b border-[#979393] overflow-hidden group ${ openAccordion === accordion.id ? 'is-active' : ''}`}>
                <div 
                    className={`${className} text-light-green duration-500 cursor-pointer flex gap-2 lg:gap-5 items-center rounded py-4`}
                    onClick={() => handleAccordionClick(accordion.id)}
                >
                    <p className='text-sm sm:text-base lg:text-[20px]'>{accordion.question}</p>
                    <span className={` ml-auto transition-all duration-500`}>
                        <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <rect y="7" width="16" height="2" rx="1" className={ `${openAccordion === accordion.id ? 'rotate-180' : 'false'} transform origin-center transition duration-200 ease-out`}></rect>
                          <rect y="7" width="16" height="2" rx="1" className={ `${openAccordion === accordion.id ? 'rotate-180' : 'false rotate-90'} transform origin-center transition duration-200 ease-out`}></rect>
                        </svg>
                    </span>
                </div>
                <div className={`${className} -z-10 group-[.is-active]:z-[1] text-white relative -top-[12rem] overflow-hidden mt-0 text-sm sm:text-base lg:text-[20px] rounded p-0 transition-all duration-500 group-[.is-active]:p-2 group-[.is-active]:mt-2 max-h-0 group-[.is-active]:max-h-[200px] group-[.is-active]:top-0`}>
                  <p>
                    {accordion.answer}
                  </p>
                </div>
            </div>
          ))}
          </ul>
    </div>
  );
};

export default Accordion;
