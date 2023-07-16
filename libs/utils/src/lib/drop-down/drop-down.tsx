// @ts-nocheck

import { useState } from 'react';
import Transition from '../transition/transition';

// import './dropdown.module.css';

/* eslint-disable-next-line */
export interface DropdownProps {
  children: React.ReactNode;
  title: string;
}

export function Dropdown({ children, title }: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      onFocus={() => setDropdownOpen(true)}
      onBlur={() => setDropdownOpen(false)}
    >
      <a
        className="flex items-center px-5 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
        href="#0"
        aria-expanded={dropdownOpen}
        onClick={(e) => e.preventDefault()}
      >
        {title}
        <svg
          className="flex-shrink-0 w-3 h-3 ml-1 text-gray-400 cursor-pointer fill-current"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
        </svg>
      </a>
      <Transition
        show={dropdownOpen}
        tag="ul"
        className="absolute left-0 w-40 py-2 ml-4 origin-top-right bg-white rounded-3xl shadow-lg top-full"
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        {children}
      </Transition>
    </li>
  );
}

export default Dropdown;

// import styled from 'styled-components';

// /* eslint-disable-next-line */
// export interface DropDownProps {}

// const StyledDropDown = styled.div`
//   color: pink;
// `;

// export function DropDown(props: DropDownProps) {
//   return (
//     <StyledDropDown>
//       <h1>Welcome to DropDown!</h1>
//     </StyledDropDown>
//   );
// }

// export default DropDown;
