// import './process.module.css';

import Image from 'next/image';

import IphoneMockup from '../assets/iphone-mockup.png';
import MockupImage02 from '../assets/mockup-image-02.jpg';
import MockupImage03 from '../assets/mockup-image-03.jpg';
import MockupImage04 from '../assets/mockup-image-04.jpg';

/* eslint-disable-next-line */
export interface ProcessProps {}

export function Process(props: ProcessProps) {
  return (
    <section className="relative w-[100vw] h-auto">
      <div className="max-w-6xl w-100 mx-auto sm:px-20">
        <div className="py-12 border-t border-gray-200 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2">
              {/* Build and style every element to perfection */}
              About Previewed
            </h2>
            <p className="text-xl text-gray-600">
              {/* Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat. */}
              Welcome to Previewed, the game-changing platform revolutionizing
              the recruitment industry. We are on a mission to transform the way
              job seekers and employers connect, making the hiring process more
              transparent, efficient, and personalized. With our innovative
              approach, we provide immersive "Day in the Life" videos that give
              job seekers an inside look into their future roles, empowering
              them to make informed decisions and find their dream jobs.
              <br />
              <br />
              At Previewed, we understand the frustrations and challenges faced
              by both job seekers and employers in the traditional hiring
              process. That's why we've built a platform that goes beyond vague
              job listings and unrealistic requirements. Our AI-powered
              algorithm analyzes various factors, including personality traits,
              skills, and preferences, to match job seekers with their ideal
              opportunities. No more wasting time on irrelevant job postings.
              <br />
              <br />
              For employers, Previewed offers a comprehensive solution to
              attract top talent and showcase their unique company culture. Our
              streamlined application process allows employers to receive
              personalized 30-second CV videos from candidates, ensuring a more
              engaging and efficient hiring experience.
              <br />
              <br />
              We are proud to be at the forefront of innovation in the
              recruitment industry, leveraging cutting-edge technology and
              user-centric design to deliver an unparalleled platform. Our
              commitment to excellence extends beyond our product, as we
              actively collaborate with industry leaders, recruitment agencies,
              and educational institutions to stay ahead of the curve and
              provide our users with the best opportunities.
              <br />
              <br />
            </p>
          </div>

          {/* Glow illustration */}
          {/* <svg
            className="absolute hidden mt-20 transform -translate-x-1/2 pointer-events-none left-1/2 lg:mt-40 -z-1 md:block"
            aria-hidden="true"
            width="854"
            height="509"
            viewBox="0 0 854 509"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="iphonesill__a"
              >
                <stop stopColor="#667EEA" offset="0%" />
                <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
              </radialGradient>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="iphonesill__b"
              >
                <stop stopColor="#9F7AEA" offset="0%" />
                <stop stopColor="#9F7AEA" stopOpacity="0" offset="100%" />
              </radialGradient>
            </defs>
            <g transform="translate(-64 -64)" fill="none" fillRule="evenodd">
              <circle
                fillOpacity=".64"
                fill="url(#iphonesill__a)"
                cx="300"
                cy="300"
                r="300"
              />
              <circle
                fillOpacity=".72"
                fill="url(#iphonesill__b)"
                cx="729"
                cy="384"
                r="240"
              />
            </g>
          </svg> */}

          {/* Items */}
        </div>
      </div>
    </section>
  );
}

export default Process;

// import styled from 'styled-components';

// /* eslint-disable-next-line */
// export interface ProcessProps {}

// const StyledProcess = styled.div`
//   color: pink;
// `;

// export function Process(props: ProcessProps) {
//   return (
//     <StyledProcess>
//       <h1>Welcome to Process!</h1>
//     </StyledProcess>
//   );
// }

// export default Process;
