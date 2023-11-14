import React from "react";
import CTA from "./CTA";
import Divider from "./Divider";
import ChevronIcon from "./ChevronIcon";
import VerticleLine from "./VerticleLine";
import VerticleIcon from "./VerticleIcon";

const Hero = () => {
  return (
    <div className='overflow-hidden relative min-h-screen pt-16 pb-32'>
      <img
        className='absolute left-[67%] top-0 w-[86%] -z-[1] hidden sm:block'
        src='images/hero-bg.webp'
        alt='background'
      />
      <img
        className='absolute left-0 -top-[1.3%] max-w-full object-contain -z-[1] block sm:hidden'
        src='images/hero-mobile.webp'
        alt='background'
      />
      <div className='px-4'>
        <div className='flex text-white section-layout pt-[6rem] '>
          {/* left side  */}
          <Divider>
            <span className='inline-block p-1 rounded-full border-2 border-white border-opacity-40'></span>
            <VerticleLine className='line-gradient-1'></VerticleLine>
            <VerticleIcon color='bg-light-purple-color'>
              <svg
                aria-hidden='true'
                height='24'
                viewBox='0 0 24 24'
                version='1.1'
                width='24'
                data-view-component='true'
                className='octicon octicon-code fill-gray-300'
              >
                <path d='M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z'></path>
              </svg>
            </VerticleIcon>
            <VerticleLine className='line-gradient-2'></VerticleLine>
          </Divider>
          {/* right side */}
          <div className='flex items-baseline flex-col gap-4 sm:gap-5 md:gap-9'>
            {/* Copilot */}
            <div className='icon-wrapper flex gap-4 items-center py-3 px-4 border border-slate-600 rounded-full max-w-full md:max-w-none cursor-pointer bg-gray-950 bg-opacity-50'>
              <img
                className='h-[44px]'
                src='images/github-ai.png'
                alt='Github AI'
              />
              <div>
                <h2 className='text-sm md:text-[1rem] font-semibold'>
                  GitHub Universe: AI. Security. DevEx
                </h2>
                <p className='text-sm md:text-[1rem] opacity-50'>
                  Register for free and join us on Nov 8-9
                </p>
              </div>
              <ChevronIcon />
            </div>
            {/* Headline */}
            <div className='mb-0 md:mb-14 mt-4'>
              <h1 className='font-semibold text-8xl hero-title mb-1 sm:mb-3'>
                Let’s build
                <br className='hidden sm:hidden md:block lg:hidden' /> from here
              </h1>
              <p className='text-p-color text-xl'>
                The world’s leading AI-powered developer platform.
              </p>
            </div>
            <CTA />
            {/* Clients */}
            <div className='mb-0 md:mb-14'>
              <p className='text-p-color text-xl mb-8'>
                Trusted by the world’s leading&nbsp;organizations&nbsp;↘︎
              </p>
              <div className='flex justify-center sm:justify-between items-center flex-wrap lg:flex-nowrap gap-4 w-[86%] mb-8'>
                {[...Array(6)].map((_, i) => (
                  <img
                    key={i}
                    className='max-w-full h-11 scale-[0.85]'
                    src={`images/logo-${i + 1}.svg`}
                    alt={`client ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
