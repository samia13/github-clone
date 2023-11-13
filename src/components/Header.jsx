import React from "react";
import { Search, Menu } from "react-feather";

const Header = () => {
  return (
    <header className='text-white bg-transparent fixed w-full z-10'>
      <div className='p-5 '>
        <div className='lg:hidden flex justify-between items-center'>
          <button className='px-2 py-1 rounded-md border border-white bg-transparent'>
            Sign Up
          </button>
          <svg
            height='32'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 16 16'
            version='1.1'
            width='32'
            data-view-component='true'
            class=' text-white'
          >
            <path d='M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z'></path>
          </svg>
          <Menu />
        </div>
        <div className='hidden lg:flex justify-between items-center'>
          <nav className='flex gap-5 items-center'>
            <svg
              height='32'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 16 16'
              version='1.1'
              width='32'
              data-view-component='true'
              class=' text-white'
            >
              <path d='M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z'></path>
            </svg>
            <ul className='flex items-center gap-3'>
              <li>
                {" "}
                <a href='#'>Product</a>
              </li>
              <li>
                {" "}
                <a href='#'>Solutions</a>
              </li>
              <li>
                {" "}
                <a href='#'>Open Source</a>
              </li>
              <li>
                {" "}
                <a href='#'>Pricing</a>
              </li>
            </ul>
          </nav>
          <div className='flex gap-4 items-center'>
            <form className='flex items-center border border-white border-opacity-50  rounded-md p-1'>
              <Search className='text-white opacity-50' size={16} />
              <input
                className='border-none bg-transparent px-2 outline-0'
                type='search'
                placeholder='Search or jump to...'
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='20'
                aria-hidden='true'
              >
                <path
                  fill='none'
                  stroke='#979A9C'
                  opacity='.4'
                  d='M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z'
                ></path>
                <path fill='#979A9C' d='M11.8 6L8 15.1h-.9L10.8 6h1z'></path>
              </svg>
            </form>
            <span>Sign In</span>
            <button className='px-2 py-1 rounded-md border border-white bg-transparent'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
