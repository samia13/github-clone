import React from "react";

const SignUpButton = () => {
  return (
    <form className='flex border-b pb-6 flex-col md:flex-row gap-4 md:gap-0 md:pr-6 md:pb-0 md:border-r md:border-b-0  border-gray-700'>
      <input
        className='pl-3 h-12 rounded-md md:rounded-none md:rounded-s-md outline-0'
        type='email'
        placeholder='Email address'
      />
      <button className='rounded-md md:rounded-none md:rounded-e-md purple-gradient text-white h-12 px-3 outline-0 font-semibold'>
        Sign up for Github
      </button>
    </form>
  );
};

export default SignUpButton;
