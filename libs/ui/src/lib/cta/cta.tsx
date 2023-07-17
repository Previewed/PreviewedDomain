// import './cta.module.css';

/* eslint-disable-next-line */
export interface CtaProps {}

export function Cta(props: CtaProps) {
  return (
    <section className="relative w-[100vw] h-auto">
      <div className="max-w-6xl mx-auto w-100 sm:px-20">
        {/* CTA box */}
        <div className="relative bg-gray-800 py-10 px-8 md:py-16 md:px-12">
          {/* Background illustration */}
          <div
            className="absolute inset-0 left-auto  pointer-events-none"
            aria-hidden="true"
          >
            <svg
              className="h-full"
              width="400"
              height="232"
              viewBox="0 0 400 232"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient
                  cx="50%"
                  cy="50%"
                  fx="50%"
                  fy="50%"
                  r="39.386%"
                  id="box-gr-a"
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
                  id="box-gr-b"
                >
                  <stop stopColor="#3ABAB4" offset="0%" />
                  <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                </radialGradient>
              </defs>
              <g transform="translate(-85 -369)" fill="none" fillRule="evenodd">
                <circle
                  fillOpacity=".16"
                  fill="url(#box-gr-a)"
                  cx="413"
                  cy="688"
                  r="240"
                />
                <circle
                  fillOpacity=".24"
                  fill="url(#box-gr-b)"
                  cx="400"
                  cy="400"
                  r="400"
                />
              </g>
            </svg>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="text-gray-100 text-3xl tracking-wide font-normal">
             Join the Waitlist and Be the First to Preview Your Future!       
              </h3>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input
                  type="tel"
                  className="form-input w-full mb-2 sm:mb-0 sm:mr-2"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
                <a
                  className="btn text-gray-900 bg-teal-200 hover:bg-teal-300 flex-shrink-0"
                  href="#0"
                >
                  Sign Up
                </a>
              </div>
              {/* Success message */}
              {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;

// import styled from 'styled-components';

// /* eslint-disable-next-line */
// export interface CtaProps {}

// const StyledCta = styled.div`
//   color: pink;
// `;

// export function Cta(props: CtaProps) {
//   return (
//     <StyledCta>
//       <h1>Welcome to Cta!</h1>
//     </StyledCta>
//   );
// }

// export default Cta;
