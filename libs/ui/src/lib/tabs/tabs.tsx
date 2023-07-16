import { useState } from 'react';
// import './tabs.module.css';

import Image from 'next/image';

import VideoThumb from '../assets/video-thumb.jpg';
import PlayButton from '../assets/play-button.svg';
import Thumb1 from '../assets/Thumbnail_1.jpg';
import Thumb2 from '../assets/Thumbnail_2.jpg';
import Thumb3 from '../assets/Thumbnail_3.jpg';
import Thumb4 from '../assets/Thumbnail_4.jpg';

/* eslint-disable-next-line */
export interface TabsProps {}

export function Tabs(props: TabsProps) {
  const [category, setCategory] = useState('1');

  return (
    <section className="relative w-[100vw] h-auto border-t border-gray-800">
      {/* Background gradient */}
      {/* <div
        className="absolute inset-0 pointer-events-none h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900"
        aria-hidden="true"
      ></div> */}
      {/* End background gradient */}
      <div className="relative max-w-6xl px-4 mx-auto sm:px-20">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <h2 className="mb-4 font-bold text-4xl">
              Register for the previewed plateform
            </h2>
            <p className="text-xl text-gray-600">
              We have a lot of great things to show you. You can watch our
              videos or read our getting started guide to get started. It shows
              the demo of how you can register and get start looking for your
              dream job.
            </p>
          </div>

          {/* Section content */}
          <div>
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-6">
              {/* Category buttons */}
              <div className="flex flex-wrap justify-center -m-1 lg:col-span-1 lg:pr-16 lg:flex-col lg:justify-start lg:mx-0">
                <button
                  className={`lg:w-full font-medium px-3 py-2 shadow transition duration-150 ease-in-out rounded flex items-center m-1 lg:mx-0 ${
                    category === '1'
                      ? 'bg-teal-500 bg-opacity-25 justify-between lg:justify-between'
                      : 'text-gray-600 hover:bg-gray-100 hover:bg-opacity-25 justify-start lg:justify-start hover:justify-between'
                  }`}
                  onClick={() => setCategory('1')}
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4 mr-2"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={`fill-current ${
                        category === '1' ? ' text-gray-700' : ' text-gray-700'
                      }`}
                      d="M5 16H4a4 4 0 01-4-4v-1h2v1a2 2 0 002 2h1v2zM13 10h-1.586l-1.207-1.207L14.37 4.63a2.121 2.121 0 00-3-3L7.207 5.793 5.99 4.576 5.98 3.02 3.038.079 0 3.117 3 6h1.586l1.207 1.207L4 9l3 3 1.793-1.793L10 11.414V13l3.01 3.01 2.98-2.979L13 10z"
                    />
                  </svg>
                  {/* <span
                    className={
                      category === '1'
                        ? 'text-white'
                        : 'text-gray-600 hover:text-white'
                    }
                  > */}
                  <span className="ml-3">Job Seekers</span>
                  {/* </span> */}
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 shadow transition duration-150 ease-in-out rounded flex items-center m-1 lg:mx-0 ${
                    category === '2'
                      ? 'bg-teal-500 bg-opacity-25 justify-between lg:justify-between'
                      : 'text-gray-600 hover:bg-gray-100 hover:bg-opacity-25 justify-start lg:justify-start hover:justify-between'
                  }`}
                  onClick={() => setCategory('2')}
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4 mr-2"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={`fill-current ${
                        category === '2' ? ' text-gray-700' : ' text-gray-700'
                      }`}
                      d="M8 3l4 4H4zM8 13L4 9h8zM1 0h14v2H1zM1 14h14v2H1z"
                    />
                  </svg>
                  {/* <span
                    className={
                      category === '2'
                        ? 'text-white dark:text-teal-400'
                        : 'text-gray-600 dark:text-gray-300'
                    }
                  > */}
                  <span className="ml-3">Employer</span>
                  {/* </span> */}
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 shadow transition duration-150 ease-in-out rounded flex items-center m-1 lg:mx-0 ${
                    category === '3'
                      ? 'bg-teal-500 bg-opacity-25 justify-between lg:justify-between'
                      : 'text-gray-600 hover:bg-gray-100 hover:bg-opacity-25 justify-start lg:justify-start hover:justify-between'
                  }`}
                  onClick={() => setCategory('3')}
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4 mr-2"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={`fill-current ${
                        category === '3' ? ' text-gray-700' : ' text-gray-700'
                      }`}
                      d="M6 0H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM5 5H2V2h3v3zM15 9h-5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5h-3v-3h3v3zM6 9H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5H2v-3h3v3zM12.5 7a1 1 0 01-.707-.293l-2.5-2.5a1 1 0 010-1.414l2.5-2.5a1 1 0 011.414 0l2.5 2.5a1 1 0 010 1.414l-2.5 2.5A1 1 0 0112.5 7z"
                    />
                  </svg>
                  {/* <span
                    className={
                      category === '3'
                        ? 'text-white dark:text-teal-400'
                        : 'text-gray-600 dark:text-gray-300'
                    }
                  > */}
                  <span className="ml-3">Recuiters / Agencies</span>
                  {/* </span> */}
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 shadow transition duration-150 ease-in-out rounded flex items-center m-1 lg:mx-0 ${
                    category === '4'
                      ? 'bg-teal-500 bg-opacity-25 justify-between lg:justify-between'
                      : 'text-gray-600 hover:bg-gray-100 hover:bg-opacity-25 justify-start lg:justify-start hover:justify-between'
                  }`}
                  onClick={() => setCategory('4')}
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4 mr-2"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={`fill-current ${
                        category === '4' ? ' text-gray-700' : ' text-gray-700'
                      }`}
                      d="M15.4.6c-.84-.8-2.16-.8-3 0L8.7 4.3c.73.252 1.388.68 1.916 1.244.469.515.83 1.119 1.065 1.775L15.4 3.6c.8-.84.8-2.16 0-3zM4.937 6.9c-1.2 1.2-1.4 5.7-1.4 5.7s4.4-.4 5.6-1.5a2.987 2.987 0 000-4.2 2.9 2.9 0 00-4.2 0z"
                    />
                  </svg>
                  {/* <span
                    className={
                      category === '4'
                        ? 'text-white dark:text-teal-400'
                        : 'text-gray-600 dark:text-gray-300'
                    }
                  > */}
                  <span className="ml-3">Skill Test</span>
                  {/* </span> */}
                </button>
                <button
                  className={`lg:w-full font-medium px-3 py-2 shadow transition duration-150 ease-in-out rounded flex items-center m-1 lg:mx-0 ${
                    category === '5'
                      ? 'bg-teal-500 bg-opacity-25 justify-between lg:justify-between'
                      : 'text-gray-600 hover:bg-gray-100 hover:bg-opacity-25 justify-start lg:justify-start hover:justify-between'
                  }`}
                  onClick={() => setCategory('5')}
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4 mr-2"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={`fill-current ${
                        category === '5' ? ' text-gray-700' : ' text-gray-700'
                      }`}
                      d="M11 16v-5h5V0H5v5H0v11h11zM2 7h7v7H2V7z"
                    />
                  </svg>
                  {/* <span
                    className={
                      category === '5'
                        ? 'text-white dark:text-teal-400'
                        : 'text-gray-600 dark:text-gray-300'
                    }
                  > */}
                  <span className="ml-3">Day in Life</span>
                  {/* </span> */}
                </button>
              </div>

              {/* Videos */}
              <div className="max-w-sm mx-auto lg:col-span-2 md:max-w-3xl lg:max-w-none">
                <div className="grid gap-6 md:grid-cols-2">
                  <div
                    className={['1'].includes(category) ? undefined : 'hidden'}
                  >
                    <div className="relative">
                      <Image
                        className="w-full"
                        src={Thumb2}
                        width="352"
                        height="264"
                        alt="Video thumbnail 01"
                      />
                      <div className="absolute inset-0 flex flex-col">
                        <div className="flex items-center justify-center flex-grow">
                          <a
                            className="transition duration-150 ease-in-out hover:opacity-75"
                            href="#0"
                          >
                            <Image
                              src={PlayButton}
                              width="72"
                              height="72"
                              alt="Play icon"
                            />
                          </a>
                        </div>
                        <div className="bottom-0 flex items-center justify-between w-full px-6 py-3 bg-white opacity-90 dark:bg-gray-900">
                          <a
                            className="font-medium text-gray-900 dark:text-gray-400"
                            href="#0"
                          >
                            Register on the Previewed platform
                          </a>
                          {/* <div className="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 rounded-full dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25">
                            2 Min
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      ['1', '2'].includes(category) ? undefined : 'hidden'
                    }
                  >
                    <div className="relative flex items-center justify-center">
                      <Image
                        className="w-full"
                        src={Thumb4}
                        width="352"
                        height="264"
                        alt="Video thumbnail 01"
                      />
                      <div className="absolute inset-0 flex flex-col">
                        <div className="flex items-center justify-center flex-grow">
                          <a
                            className="transition duration-150 ease-in-out hover:opacity-75"
                            href="#0"
                          >
                            <Image
                              src={PlayButton}
                              width="72"
                              height="72"
                              alt="Play icon"
                            />
                          </a>
                        </div>
                        <div className="bottom-0 flex items-center justify-between w-full px-6 py-3 bg-white opacity-90 dark:bg-gray-900">
                          <a
                            className="font-medium text-gray-900 dark:text-gray-400"
                            href="#0"
                          >
                            Click "Skill Test" if lacking specific requirements
                          </a>
                          {/* <div className="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 rounded-full dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25">
                            4 Min
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      ['1', '3'].includes(category) ? undefined : 'hidden'
                    }
                  >
                    <div className="relative flex items-center justify-center shadow">
                      <Image
                        className="w-full"
                        src={Thumb1}
                        width="352"
                        height="264"
                        alt="Video thumbnail 01"
                      />
                      <div className="absolute inset-0 flex flex-col">
                        <div className="flex items-center justify-center flex-grow">
                          <a
                            className="transition duration-150 ease-in-out hover:opacity-75"
                            href="#0"
                          >
                            <Image
                              src={PlayButton}
                              width="72"
                              height="72"
                              alt="Play icon"
                            />
                          </a>
                        </div>
                        <div className="bottom-0 flex items-center justify-between w-full px-6 py-3 bg-white opacity-90 dark:bg-gray-900">
                          <a
                            className="font-medium text-gray-900 dark:text-gray-400"
                            href="#0"
                          >
                            Submit a 30-second personalized CV video
                          </a>
                          {/* <div className="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 rounded-full dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25">
                            7 Min
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      ['1', '4'].includes(category) ? undefined : 'hidden'
                    }
                  >
                    <div className="relative flex items-center justify-center shadow">
                      <Image
                        className="w-full"
                        src={Thumb3}
                        width="352"
                        height="264"
                        alt="Video thumbnail 01"
                      />
                      <div className="absolute inset-0 flex flex-col">
                        <div className="flex items-center justify-center flex-grow">
                          <a
                            className="transition duration-150 ease-in-out hover:opacity-75"
                            href="#0"
                          >
                            <Image
                              src={PlayButton}
                              width="72"
                              height="72"
                              alt="Play icon"
                            />
                          </a>
                        </div>
                        <div className="bottom-0 flex items-center justify-between w-full px-6 py-3 bg-white opacity-90 dark:bg-gray-900">
                          <a
                            className="font-medium text-gray-900 dark:text-gray-400"
                            href="#0"
                          >
                            Realistic job listings with relevant information
                          </a>
                          {/* <div className="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 rounded-full dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25">
                            9 Min
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      ['2', '5'].includes(category) ? undefined : 'hidden'
                    }
                  >
                    <div className="relative flex items-center justify-center shadow">
                      <Image
                        className="w-full"
                        src={VideoThumb}
                        width="352"
                        height="264"
                        alt="Video thumbnail 01"
                      />
                      <div className="absolute inset-0 flex flex-col">
                        <div className="flex items-center justify-center flex-grow">
                          <a
                            className="transition duration-150 ease-in-out hover:opacity-75"
                            href="#0"
                          >
                            <Image
                              src={PlayButton}
                              width="72"
                              height="72"
                              alt="Play icon"
                            />
                          </a>
                        </div>
                        <div className="bottom-0 flex items-center justify-between w-full px-6 py-3 bg-white opacity-90 dark:bg-gray-900">
                          <a
                            className="font-medium text-gray-900 dark:text-gray-400"
                            href="#0"
                          >
                            Register on the Previewed platform
                          </a>
                          {/* <div className="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 rounded-full dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25">
                            12 Min
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      ['2', '3'].includes(category) ? undefined : 'hidden'
                    }
                  >
                    <div className="relative flex items-center justify-center shadow">
                      <Image
                        className="w-full"
                        src={VideoThumb}
                        width="352"
                        height="264"
                        alt="Video thumbnail 01"
                      />
                      <div className="absolute inset-0 flex flex-col">
                        <div className="flex items-center justify-center flex-grow">
                          <a
                            className="transition duration-150 ease-in-out hover:opacity-75"
                            href="#0"
                          >
                            <Image
                              src={PlayButton}
                              width="72"
                              height="72"
                              alt="Play icon"
                            />
                          </a>
                        </div>
                        <div className="bottom-0 flex items-center justify-between w-full px-6 py-3 bg-white opacity-90 dark:bg-gray-900">
                          <a
                            className="font-medium text-gray-900 dark:text-gray-400"
                            href="#0"
                          >
                            Complete onboarding process
                          </a>
                          {/* <div className="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 rounded-full dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25">
                            3 Min
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      ['2', '4'].includes(category) ? undefined : 'hidden'
                    }
                  >
                    <div className="relative flex items-center justify-center shadow">
                      <Image
                        className="w-full"
                        src={VideoThumb}
                        width="352"
                        height="264"
                        alt="Video thumbnail 01"
                      />
                      <div className="absolute inset-0 flex flex-col">
                        <div className="flex items-center justify-center flex-grow">
                          <a
                            className="transition duration-150 ease-in-out hover:opacity-75"
                            href="#0"
                          >
                            <Image
                              src={PlayButton}
                              width="72"
                              height="72"
                              alt="Play icon"
                            />
                          </a>
                        </div>
                        <div className="bottom-0 flex items-center justify-between w-full px-6 py-3 bg-white opacity-90 dark:bg-gray-900">
                          <a
                            className="font-medium text-gray-900 dark:text-gray-400"
                            href="#0"
                          >
                            Request "Day in the Life" video
                          </a>
                          {/* <div className="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 rounded-full dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25">
                            11 Min
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      ['3', '5'].includes(category) ? undefined : 'hidden'
                    }
                  >
                    <div className="relative flex items-center justify-center shadow">
                      <Image
                        className="w-full"
                        src={VideoThumb}
                        width="352"
                        height="264"
                        alt="Video thumbnail 01"
                      />
                      <div className="absolute inset-0 flex flex-col">
                        <div className="flex items-center justify-center flex-grow">
                          <a
                            className="transition duration-150 ease-in-out hover:opacity-75"
                            href="#0"
                          >
                            <Image
                              src={PlayButton}
                              width="72"
                              height="72"
                              alt="Play icon"
                            />
                          </a>
                        </div>
                        <div className="bottom-0 flex items-center justify-between w-full px-6 py-3 bg-white opacity-90 dark:bg-gray-900">
                          <a
                            className="font-medium text-gray-900 dark:text-gray-400"
                            href="#0"
                          >
                            Leverage the Previewed platform
                          </a>
                          {/* <div className="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 rounded-full dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25">
                            6 Min
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={['5'].includes(category) ? undefined : 'hidden'}
                  >
                    <div className="relative flex items-center justify-center shadow">
                      <Image
                        className="w-full"
                        src={VideoThumb}
                        width="352"
                        height="264"
                        alt="Video thumbnail 01"
                      />
                      <div className="absolute inset-0 flex flex-col">
                        <div className="flex items-center justify-center flex-grow">
                          <a
                            className="transition duration-150 ease-in-out hover:opacity-75"
                            href="#0"
                          >
                            <Image
                              src={PlayButton}
                              width="72"
                              height="72"
                              alt="Play icon"
                            />
                          </a>
                        </div>
                        <div className="bottom-0 flex items-center justify-between w-full px-6 py-3 bg-white opacity-90 dark:bg-gray-900">
                          <a
                            className="font-medium text-gray-900 dark:text-gray-400"
                            href="#0"
                          >
                            AI algorithm matches job seeker with ideal
                            opportunities
                          </a>
                          {/* <div className="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 rounded-full dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25">
                            4 Min
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={['5'].includes(category) ? undefined : 'hidden'}
                  >
                    <div className="relative flex items-center justify-center shadow">
                      <Image
                        className="w-full"
                        src={VideoThumb}
                        width="352"
                        height="264"
                        alt="Video thumbnail 01"
                      />
                      <div className="absolute inset-0 flex flex-col">
                        <div className="flex items-center justify-center flex-grow">
                          <a
                            className="transition duration-150 ease-in-out hover:opacity-75"
                            href="#0"
                          >
                            <Image
                              src={PlayButton}
                              width="72"
                              height="72"
                              alt="Play icon"
                            />
                          </a>
                        </div>
                        <div className="bottom-0 flex items-center justify-between w-full px-6 py-3 bg-white opacity-90 dark:bg-gray-900">
                          <a
                            className="font-medium text-gray-900 dark:text-gray-400"
                            href="#0"
                          >
                            Receive "Day in the Life" videos of potential
                            workplaces
                          </a>
                          {/* <div className="inline-flex px-3 py-1 text-xs font-medium text-white bg-gray-900 bg-opacity-50 rounded-full dark:text-teal-400 dark:bg-teal-600 dark:bg-opacity-25">
                            9 Min
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;

// import styled from 'styled-components';

// /* eslint-disable-next-line */
// export interface TabsProps {}

// const StyledTabs = styled.div`
//   color: pink;
// `;

// export function Tabs(props: TabsProps) {
//   return (
//     <StyledTabs>
//       <h1>Welcome to Tabs!</h1>
//     </StyledTabs>
//   );
// }

// export default Tabs;
