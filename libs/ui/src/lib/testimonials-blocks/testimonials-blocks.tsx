// import './testimonials-blocks.module.css';

import Image from 'next/image';

import Testimonial01 from '../assets/testimonial-01.jpg';
import Testimonial02 from '../assets/testimonial-02.jpg';
import Testimonial03 from '../assets/testimonial-03.jpg';
import Testimonial04 from '../assets/testimonial-04.jpg';

/* eslint-disable-next-line */
export interface TestimonialsBlocksProps {}

export function TestimonialsBlocks(props: TestimonialsBlocksProps) {
  return (
    <section className="relative w-[100vw] h-auto">
      <div className="max-w-6xl px-4 mx-auto w-100 sm:px-20">
        <div className="py-12 border-t border-transparent md:py-20 dark:border-gray-800">
          {/* Testimonials */}
          <div className="grid items-start max-w-sm mx-auto gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-12 sm:max-w-none md:max-w-2xl lg:max-w-none">
            {/* 1st testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image
                  className="rounded-full"
                  src={Testimonial01}
                  width="56"
                  height="56"
                  alt="Testimonial 01"
                />
                <svg
                  className="absolute top-0 right-0 mt-1 -mr-8"
                  width="27"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="text-purple-500 fill-current"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ This is a great app and the value is amazing. Since I
                purchased it I have been using it everyday! Highly recommend it.
                “
              </blockquote>
              <div className="mt-2 font-bold font-red-hat-display">
                <cite className="not-italic">— Andy Croll</cite>,{' '}
                <a
                  className="text-teal-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Appy.com
                </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image
                  className="rounded-full"
                  src={Testimonial02}
                  width="56"
                  height="56"
                  alt="Testimonial 02"
                />
                <svg
                  className="absolute top-0 right-0 mt-1 -mr-8"
                  width="27"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="text-purple-500 fill-current"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ This is a great app and the value is amazing. Since I
                purchased it I have been using it everyday! Highly recommend it.
                “
              </blockquote>
              <div className="mt-2 font-bold font-red-hat-display">
                <cite className="not-italic">— Patricia Lepisov</cite>,{' '}
                <a
                  className="text-teal-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Nobi Bank
                </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image
                  className="rounded-full"
                  src={Testimonial03}
                  width="56"
                  height="56"
                  alt="Testimonial 03"
                />
                <svg
                  className="absolute top-0 right-0 mt-1 -mr-8"
                  width="27"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="text-purple-500 fill-current"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ This is a great app and the value is amazing. Since I
                purchased it I have been using it everyday! Highly recommend it.
                “
              </blockquote>
              <div className="mt-2 font-bold font-red-hat-display">
                <cite className="not-italic">— Zhenya Ritz</cite>,{' '}
                <a
                  className="text-teal-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Sync
                </a>
              </div>
            </div>

            {/* 4th testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image
                  className="rounded-full"
                  src={Testimonial04}
                  width="56"
                  height="56"
                  alt="Testimonial 04"
                />
                <svg
                  className="absolute top-0 right-0 mt-1 -mr-8"
                  width="27"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="text-purple-500 fill-current"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ This is a great app and the value is amazing. Since I
                purchased it I have been using it everyday! Highly recommend it.
                “
              </blockquote>
              <div className="mt-2 font-bold font-red-hat-display">
                <cite className="not-italic">— Lisa Champ</cite>,{' '}
                <a
                  className="text-teal-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Appicu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsBlocks;

// import styled from 'styled-components';

// /* eslint-disable-next-line */
// export interface TestimonialsBlocksProps {}

// const StyledTestimonialsBlocks = styled.div`
//   color: pink;
// `;

// export function TestimonialsBlocks(props: TestimonialsBlocksProps) {
//   return (
//     <StyledTestimonialsBlocks>
//       <h1>Welcome to TestimonialsBlocks!</h1>
//     </StyledTestimonialsBlocks>
//   );
// }

// export default TestimonialsBlocks;
