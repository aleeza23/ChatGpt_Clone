import React, { useState } from "react";
import { Link } from "react-router-dom";
import mbLogo from "../../../assets/logo.png";
import UserMenu from "./UserMenu";
import avatar from '../../../assets/avatar.jpg'
import pcLogo from "../../../assets/desktop-logo.png";


const Header = ({ setopen, open }) => {
  const [showUser, setshowUser] = useState(false);

  return (
    <>
      <nav className={`sm:ml-64  bg-white header `}>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start '>
              <button

                onClick={() => setopen((prev) => !prev)}
                className='inline-flex items-center transition  p-2 text-sm text-blue-color rounded-lg sm:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              >
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    clip-rule='evenodd'
                    fill-rule='evenodd'
                    d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                  ></path>
                </svg>
              </button>
              <Link href='/' class=' ms-2 md:me-24   hidden sm:flex'>
                <h1 className="font-bold text-gray-500">ChatGpt</h1>

              </Link>
              <Link href='/' className=' ms-2 md:me-24 flex sm:hidden'>
                <h1 className="font-bold text-gray-500">ChatGpt</h1>
              </Link>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex flex-col items-center ms-3'>
                <div>
                  <button
                    type='button'
                    onClick={() => setshowUser(prev => !prev)}
                    className='flex duration-300 relative text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'

                  >
                    <img className="w-8 h-8 rounded-full" src={avatar} alt={'avatar'} />
                  </button>
                </div>
                {showUser && <UserMenu />}

              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
