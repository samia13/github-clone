import React from "react";
import { CTA, Divider, VerticleLine, VerticleIcon } from "./index";

const Contact = () => {
  return (
    <section className='section'>
      <div className='flex text-white section-layout'>
        <Divider>
          <VerticleLine className='transp-pink-gradient'></VerticleLine>
          <VerticleIcon color='bg-pink-color'>
            <svg
              aria-hidden='true'
              height='24'
              viewBox='0 0 24 24'
              version='1.1'
              width='24'
              data-view-component='true'
              className='octicon octicon-briefcase fill-gray-300'
            >
              <path d='M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z'></path>
            </svg>
          </VerticleIcon>
        </Divider>
        <div className='pt-10'>
          <h1 className='py-10 pr-8 text-6xl font-extrabold '>
            Over 100 million developers call GitHub home3
          </h1>
          <p className='mb-10 text-xl font-semibold text-zinc-500'>
            Whether you’re scaling your startup or just learning how to code,
            GitHub is your home. Join the world’s largest developer platform to
            build the innovations that empower humanity. Let’s build from here.
          </p>
          <CTA marginBottom='0' />
        </div>
      </div>
    </section>
  );
};

export default Contact;
