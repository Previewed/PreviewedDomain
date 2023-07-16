// @ts-nocheck
// import './header.module.css';

import { useState, useRef, useEffect } from 'react';

import { Dropdown, Transition } from '@previewed-inc/utils';

import Link from 'next/link';

import { Switch } from '@headlessui/react';
import { GetStaticProps } from 'next';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      console.log(mobileNav.current.contains(target));
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // Handle light modes
  // const [darkMode, setDarkMode] = useState(() => {
  //   if (typeof window !== 'undefined') {
  //     const dark = localStorage.getItem('dark-mode');

  //     if (dark === null) {
  //       return true;
  //     } else {
  //       return dark === 'true';
  //     }
  //   }
  // });

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem('dark-mode', darkMode);
  //     if (darkMode) {
  //       document.documentElement.classList.add('dark');
  //     } else {
  //       document.documentElement.classList.remove('dark');
  //     }
  //   }
  // }, [darkMode]);

  return (
    <header className="fixed max-w-full w-full z-30 top-0 left-0 bg-blur backdrop-blur-lg bg-gradient-to-b from-slate-200 transition-colors duration-300">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 max-w-full">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-5">
            {/* Logo */}
            <Link href="/" passHref aria-label="Previewed">
              <div className="block">
                {/* <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="26%"
                      y1="100%"
                      x2="100%"
                      y2="100%"
                      id="logo_a"
                    >
                      <stop stopColor="#3ABAB4" offset="0%" />
                      <stop stopColor="#7F9CF5" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="26%"
                      y1="100%"
                      x2="100%"
                      y2="100%"
                      id="logo_b"
                    >
                      <stop stopColor="#3ABAB4" offset="0%" />
                      <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z"
                    fill="url(#logo_a)"
                  />
                  <path
                    d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z"
                    fill="url(#logo_b)"
                  />
                </svg> */}
                <span className="text-2xl font-bold text-gray-800 font-serif">
                  PreviewED
                </span>
                <span className="text-sm font-bold text-blue-500 font-serif">
                  .CAREERS
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">
            {/* Desktop menu links */}
            <ul className="flex flex-nowrap items-center justify-center flex-grow font-medium">
              <li>
                <Link href="/" passHref>
                  <div className="flex items-center px-5 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <div className="flex items-center px-5 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                    About
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/blog" passHref>
                  <div className="flex items-center px-5 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                    Blog
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/testimonials" passHref>
                  <div className="flex items-center px-5 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                    Testimonials
                  </div>
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Resources">
                {/* 2nd level: hover */}
                <li>
                  <Link href="/help" passHref>
                    <div className="flex px-4 py-2 text-sm leading-tight text-gray-600 hover:text-teal-500">
                      Help center
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/404" passHref>
                    <div className="flex px-4 py-2 text-sm leading-tight text-gray-600 hover:text-teal-500">
                      404
                    </div>
                  </Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop lights switch */}
            {/* <div className="flex flex-col justify-center ml-3 ">
              {typeof window !== 'undefined' && (
                <Switch
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className={classNames(
                    darkMode ? 'bg-teal-500' : 'bg-teal-500',
                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  )}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    className={classNames(
                      darkMode
                        ? 'translate-x-5 bg-gray-800 '
                        : 'translate-x-0 bg-white',
                      'pointer-events-none relative inline-block h-5 w-5 rounded-full  shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                  >
                    <span
                      className={classNames(
                        darkMode
                          ? 'opacity-0 ease-out duration-100'
                          : 'opacity-100 ease-in duration-200',
                        'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                      )}
                      aria-hidden="true"
                    ></span>
                    <span
                      className={classNames(
                        darkMode
                          ? 'opacity-100 ease-in duration-200'
                          : 'opacity-0 ease-out duration-100',
                        'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                      )}
                      aria-hidden="true"
                    ></span>
                  </span>
                </Switch>
              )}
            </div> */}

            {/* Desktop CTA on the right */}
          </nav>

          <ul className="">
            <li>
              <Link href="/login" passHref>
                <div className="flex-shrink-0 text-white bg-teal-500 btn-sm hover:bg-teal-400">
                  Sign Up
                </div>
              </Link>
            </li>
          </ul>

          {/* Mobile menu */}
          <div className="inline-flex md:hidden">
            {/* Mobile lights switch */}
            {/* <div className="form-switch focus-within:outline-blue flex flex-col justify-center mr-6 -mt-0.5">
              {typeof window !== 'undefined' && (
                <Switch
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className={classNames(
                    darkMode ? 'bg-teal-500' : 'bg-teal-500',
                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  )}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    className={classNames(
                      darkMode
                        ? 'translate-x-5 bg-gray-800 '
                        : 'translate-x-0 bg-white',
                      'pointer-events-none relative inline-block h-5 w-5 rounded-full  shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                  >
                    <span
                      className={classNames(
                        darkMode
                          ? 'opacity-0 ease-out duration-100'
                          : 'opacity-100 ease-in duration-200',
                        'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                      )}
                      aria-hidden="true"
                    ></span>
                    <span
                      className={classNames(
                        darkMode
                          ? 'opacity-100 ease-in duration-200'
                          : 'opacity-0 ease-out duration-100',
                        'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                      )}
                      aria-hidden="true"
                    ></span>
                  </span>
                </Switch>
              )}
            </div> */}

            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 text-gray-900 transition duration-150 ease-in-out fill-current hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <Transition
              show={mobileNavOpen}
              tag="ul"
              className="fixed top-0 left-0 z-20 w-full h-screen max-w-sm -ml-16 overflow-scroll bg-white shadow-lg dark:bg-gray-900"
              enter="transition ease-out duration-200 transform"
              enterStart="opacity-0 -translate-x-full"
              enterEnd="opacity-100 translate-x-0"
              leave="transition ease-out duration-200"
              leaveStart="opacity-100"
              leaveEnd="opacity-0"
            >
              <nav
                id="mobile-nav"
                ref={mobileNav}
                className="fixed top-0 left-0 z-20 w-full h-screen max-w-sm -ml-16 overflow-scroll bg-white shadow-lg dark:bg-gray-900 no-scrollbar"
              >
                <div className="py-6 pl-20 pr-4">
                  {/* Logo */}
                  <span className="text-2xl font-bold text-white font-serif">
                    PreviewED
                  </span>
                  <span className="text-sm font-bold text-blue-500">
                    .CAREERS
                  </span>
                  {/* <svg
                    className="w-8 h-8"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="26%"
                        y1="100%"
                        x2="100%"
                        y2="100%"
                        id="menulogo_a"
                      >
                        <stop stopColor="#3ABAB4" offset="0%" />
                        <stop stopColor="#7F9CF5" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="26%"
                        y1="100%"
                        x2="100%"
                        y2="100%"
                        id="menulogo_b"
                      >
                        <stop stopColor="#3ABAB4" offset="0%" />
                        <stop
                          stopColor="#3ABAB4"
                          stopOpacity="0"
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z"
                      fill="url(#menulogo_a)"
                    />
                    <path
                      d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z"
                      fill="url(#menulogo_b)"
                    />
                  </svg> */}
                  {/* Links */}
                  <ul>
                    <li>
                      <Link href="/about" passHref>
                        <div className="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                          About
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" passHref>
                        <div className="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                          Blog
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/testimonials" passHref>
                        <div className="flex py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                          Testimonials
                        </div>
                      </Link>
                    </li>
                    <li className="py-2 my-2 border-t border-b border-gray-200 dark:border-gray-800">
                      <span className="flex py-2 text-gray-600 dark:text-gray-400">
                        Resources
                      </span>
                      <ul className="pl-4">
                        <li>
                          <Link href="/help" passHref>
                            <div className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                              Help center
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/404" passHref>
                            <div className="flex py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                              404
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/Login" passHref>
                        <div className="flex-shrink-0 text-white bg-teal-500 btn hover:bg-teal-400 w-full">
                          Sign Up
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </Transition>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

// import styled from 'styled-components';

// /* eslint-disable-next-line */
// export interface HeaderProps {}

// const StyledHeader = styled.div`
//   color: pink;
// `;

// export function Header(props: HeaderProps) {
//   return (
//     <StyledHeader>
//       <h1>Welcome to Header!</h1>
//     </StyledHeader>
//   );
// }

// export default Header;
