'use client';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LoginProps {}

const StyledLogin = styled.div`
  color: pink;
`;

export default function Login(props: LoginProps) {
  return (
    // <StyledLogin>
    //   <h1>Welcome to Login!</h1>
    // </StyledLogin>
    <section className="relative">
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <h1 className="mb-4 h1 font-red-hat-display">
              Get started with Appy in seconds
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We'll send you a text with a link to download the app.
            </p>
          </div>

          {/* Contact form */}
          <form className="max-w-xl mx-auto">
            <div className="flex flex-wrap mb-5 -mx-3">
              <div className="w-full px-3 mb-4 md:w-1/2 md:mb-0">
                <label
                  className="block mb-1 text-sm font-medium text-gray-800 dark:text-gray-300"
                  htmlFor="first-name"
                >
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="w-full form-input"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label
                  className="block mb-1 text-sm font-medium text-gray-800 dark:text-gray-300"
                  htmlFor="last-name"
                >
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="w-full form-input"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-5 -mx-3">
              <div className="w-full px-3">
                <label
                  className="block mb-1 text-sm font-medium text-gray-800 dark:text-gray-300"
                  htmlFor="company"
                >
                  Company <span className="text-red-600">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full form-input"
                  placeholder="Enter your company name"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-5 -mx-3">
              <div className="w-full px-3">
                <label
                  className="block mb-1 text-sm font-medium text-gray-800 dark:text-gray-300"
                  htmlFor="phone"
                >
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full form-input"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-5 -mx-3">
              <div className="w-full px-3">
                <label
                  className="block mb-1 text-sm font-medium text-gray-800 dark:text-gray-300"
                  htmlFor="country"
                >
                  Country <span className="text-red-600">*</span>
                </label>
                <select id="country" className="w-full form-select" required>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap mb-5 -mx-3">
              <div className="w-full px-3">
                <div className="flex items-center justify-between mb-1">
                  <label
                    className="block text-sm font-medium text-gray-800 dark:text-gray-300"
                    htmlFor="message"
                  >
                    Details
                  </label>
                  <span className="text-sm text-gray-500">Optional</span>
                </div>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full form-textarea"
                  placeholder="What do you want to build with Appy?"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap mb-5 -mx-3">
              <div className="w-full px-3">
                <div className="block mb-3 text-sm font-medium text-gray-800 dark:text-gray-300">
                  Tell us about your role
                </div>
                <label className="flex items-center mb-2">
                  <input type="radio" className="form-radio" name="role" />
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                    CO-founder
                  </span>
                </label>
                <label className="flex items-center mb-2">
                  <input type="radio" className="form-radio" name="role" />
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                    Developer
                  </span>
                </label>
                <label className="flex items-center mb-2">
                  <input type="radio" className="form-radio" name="role" />
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                    Design / Marketing
                  </span>
                </label>
                <label className="flex items-center mb-2">
                  <input type="radio" className="form-radio" name="role" />
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                    Other
                  </span>
                </label>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 -mx-3">
              <div className="w-full px-3">
                <button className="flex items-center w-full text-white bg-teal-500 btn hover:bg-teal-400">
                  <span>Request code</span>
                  <svg
                    className="flex-shrink-0 w-3 h-3 mt-px ml-2"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-current"
                      d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
