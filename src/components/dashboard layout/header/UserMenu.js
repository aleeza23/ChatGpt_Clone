import React from "react";
import {Link} from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className='z-50 absolute duration-300  top-9 right-3  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow'>
        <div className='px-4 py-3' role='none'>
          <p className='text-sm text-gray-900 dark:text-white' role='none'>
            Neil Sims
          </p>
          <p
            className='text-sm font-medium text-gray-900 truncate dark:text-gray-300'
            role='none'
          >
            neil.sims@flowbite.com
          </p>
        </div>
        <ul className='py-1' role='none'>
          <li>
            <Link
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-secandory-color'
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-secandory-color'
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserMenu;
