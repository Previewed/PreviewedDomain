// import './pricing-tables.module.css';

/* eslint-disable-next-line */
export interface PricingTablesProps {}

export function PricingTables(props: PricingTablesProps) {
  return (
    <section className="relative w-[100vw] h-auto border-t border-transparent">
      {/* Background gradient (dark version only) */}
      <div
        className="absolute inset-0 opacity-25 bg-gradient-to-b from-gray-800 to-gray-900 pointer-events-none hidden"
        aria-hidden="true"
      ></div>
      {/* End background gradient (dark version only) */}
      <div className="w-100 max-w-6xl mx-auto">
        <div className="md:py-20">
          <div className=" bg-violet-100 p-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12">
              <h2 className="font-bold text-lg md:text-2xl lg:text-3xl mb-4 text-gray-800">
                Choose Your Path to Success – Find Your Dream Job or Attract Top Talent with Previewed!
              </h2>
              <p className="text-xl text-gray-400">
                Previewed offers flexible pricing plans to cater to the diverse needs of job seekers and employers. 
                Choose the plan that suits you best and start your journey towards finding your dream job or attracting top talent.
              </p>
            </div>

            {/* Pricing tables */}
            <div className="max-w-xs mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">
              {/* Pricing features */}
              <div className="sm:order-first">
                <div className="text-right hidden sm:block">
                  <svg
                    className="inline-flex -mt-3 mr-5 mb-3"
                    width="86"
                    height="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-current text-gray-600"
                      d="M80.959 10.448l-5.502-8.292 1.666-1.105 8.596 12.953-15.534.62-.08-1.999 9.944-.397-7.182-3.672C45.251-3.737 21.787 1.633 2.216 24.726L.69 23.435C20.836-.338 45.252-5.926 73.73 6.752l7.23 3.696z"
                    />
                  </svg>
                </div>
                <div className="text-lg font-bold font-red-hat-display mb-4 mt-4 sm:mt-0 text-gray-700">
                  All plans include:
                </div>
                <ul className="text-gray-700 font-normal -mb-2 flex-grow">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Job Seeker Access</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Employer Access</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Personalized Matching</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Immersive Videos</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Application Tracking</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Networking Opportunities</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Interview Preparation</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-teal-500 mr-3 flex-shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Career Resources</span>
                  </li>
                </ul>
              </div>

              {/* Pricing table 1 */}
              <div
                className="flex flex-col h-full p-6 bg-white shadow border-2 border-transparent dark:border-gray-900 hover:border-teal-500"
                data-aos="fade-down"
              >
                <div className="flex-grow mb-4 pb-4">
                  <div className="flex justify-center items-center mb-1">
                    <div className="text-xl font-bold">Job Seeker Plan</div>
                    {/* <div className="inline-flex px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400 bg-teal-200 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">
                    -40%
                  </div> */}
                  </div>
                  <div className="inline-flex pt-5 items-baseline mb-2">
                    <span className="h4 text-gray-600 pr-2">$</span>
                    <span className="h4 font-semibold text-black font-mono">
                      9.99
                    </span>
                    <span className="font-medium text-gray-500 ">/</span>
                    <span className="pl-2 font-medium text-gray-500">
                      billed monthly
                    </span>
                  </div>
                  <div className="text-gray-500">
                   — Full access to all job listings and enhanced features.
                   — Personalized job recommendations and priority support.
                  </div>
                </div>
                <div className="mt-24">
                  <a
                    className="btn-sm text-lg text-gray-800 tracking-wider hover:bg-opacity-75 bg-teal-200 hover:bg-teal-400 w-full"
                    href="#0"
                  >
                    Go Premium
                  </a>
                </div>
              </div>

              {/* Pricing table 2 */}
              <div
                className="flex flex-col h-full p-6 bg-white shadow border-2  dark:border-gray-900 hover:border-teal-500"
                data-aos="fade-down"
              >
                <div className="flex-grow mb-4 pb-4">
                  <div className="flex justify-center items-center mb-1">
                    <div className="text-xl font-bold">Employer Plan</div>
                    {/* <div className="inline-flex px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400 bg-teal-200 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">
                    -40%
                  </div> */}
                  </div>
                  <div className="inline-flex pt-5 items-baseline mb-2">
                    <span className="h4 text-gray-600 pr-2">$</span>
                    <span className="h4 font-semibold text-black font-mono">
                      Customized pricing 
                    </span>
                    <span className="font-medium text-gray-500 ">/</span>
                    <span className="pl-2 font-medium text-gray-500">
                      billed monthly
                    </span>
                  </div>
                  <div className="text-gray-500">
                    — Customized pricing and features tailored to your organization's hiring needs.
                    — Unlimited job listings, advanced candidate management, and premium support.
                  </div>
                </div>
                <div className="mt-24">
                  <a
                    className="btn-sm text-lg text-gray-800 tracking-wider hover:bg-opacity-75 bg-teal-200 hover:bg-teal-400 w-full"
                    href="#0"
                  >
                    Get Quote
                  </a>
                </div>
              </div>

              {/* Pricing table 3 */}
              <div
                className="flex flex-col h-full p-6 bg-white shadow border-2 border-transparent dark:border-gray-900 hover:border-teal-500"
                data-aos="fade-down"
              >
                <div className="flex-grow mb-4 pb-4">
                  <div className="flex justify-center items-center mb-1">
                    <div className="text-xl font-bold">Recruiter/Recruiting Agency Plan</div>
                    {/* <div className="inline-flex px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400 bg-teal-200 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">
                    -40%
                  </div> */}
                  </div>
                  <div className="inline-flex pt-5 items-baseline mb-2">
                    <span className="h4 text-gray-600 pr-2">$</span>
                    <span className="h4 font-semibold text-black font-mono">
                      Customized pricing 
                    </span>
                    <span className="font-medium text-gray-500 ">/</span>
                    <span className="pl-2 font-medium text-gray-500">
                      billed yearly
                    </span>
                  </div>
                  <div className="text-gray-500">
                    — We offer tailored plans for recruiters and recruiting agencies.
                    — Get in touch with our team to discuss your specific requirements and pricing options
                  </div>
                </div>
                <div className="mt-24">
                  <a
                    className="btn-sm text-lg text-gray-800 tracking-wider hover:bg-opacity-75 bg-teal-200 hover:bg-teal-400 w-full"
                    href="#0"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingTables;

// import styled from 'styled-components';

// /* eslint-disable-next-line */
// export interface PricingTablesProps {}

// const StyledPricingTables = styled.div`
//   color: pink;
// `;

// export function PricingTables(props: PricingTablesProps) {
//   return (
//     <StyledPricingTables>
//       <h1>Welcome to PricingTables!</h1>
//     </StyledPricingTables>
//   );
// }

// export default PricingTables;
