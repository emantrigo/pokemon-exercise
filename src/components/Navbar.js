import React from 'react';

function Navbar() {
  return (
    <nav className=' bg-blueLight px-2 sm:px-4 py-2.5'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <a href='/' className='flex items-center'>
          <img
            src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
            className='mr-3 h-6 sm:h-9'
            alt='Flowbite Logo'
          />
        </a>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
          aria-controls='navbar-default'
          aria-expanded='false'>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='#ffcb05'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clip-rule='evenodd'></path>
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-col p-4 mt-4border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 '>
            <li>
              <a
                href='/'
                className='block font-bold py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0  md:hover:text-yellowLight '
                aria-current='page'>
                Home
              </a>
            </li>
            <li>
              <a
                href='/favorites'
                className='block font-bold py-2 pr-4 pl-3 text-white roundedmd:hover:bg-transparent md:border-0 md:hover:text-yellowLight md:p-0'>
                Favorites
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
