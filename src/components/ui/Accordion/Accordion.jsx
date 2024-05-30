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
          {data.map((accordion) => (
              <div key={accordion.id} className={`relative py-2 border-b border-[#979393] overflow-hidden group ${ openAccordion === accordion.id ? 'is-active' : ''}`}>
                <div 
                    className={`${className} text-light-green duration-500 cursor-pointer flex gap-2 lg:gap-5 items-center rounded py-4`}
                    onClick={() => handleAccordionClick(accordion.id)}
                >
                    <p className='text-sm lg:text-base'>{accordion.question}</p>
                    <span className={` ml-auto transition-all duration-500`}>
                      {openAccordion === accordion.id ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <mask id="mask0_1_188" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9"/>
                          </mask>
                          <g mask="url(#mask0_1_188)">
                            <path d="M5 13V11H19V13H5Z" fill="#2BA7AA"/>
                          </g>
                        </svg>
                        
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <mask id="mask0_1_167" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9"/>
                          </mask>
                          <g mask="url(#mask0_1_167)">
                            <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="#2BA7AA"/>
                          </g>
                        </svg>
                      )}
                        {/* <img src="/arrow-right.svg" alt="" /> */}
                    </span>
                </div>
                <div className={`${className} -z-10 group-[.is-active]:z-[1] text-white relative -top-[12rem] overflow-hidden mt-0 text-sm rounded p-0 transition-all duration-500 group-[.is-active]:p-2 group-[.is-active]:mt-2 max-h-0 group-[.is-active]:max-h-[200px] group-[.is-active]:top-0`}>
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