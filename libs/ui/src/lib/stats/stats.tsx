// // import './stats.module.css';

// /* eslint-disable-next-line */
// export interface StatsProps {}

// export function Stats(props: StatsProps) {
//   return (
//     <section className="w-[100vw] h-auto relative">
//       {/* Background gradient (light version only) */}
//       <div
//         className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden"
//         aria-hidden="true"
//       ></div>
//       {/* End background gradient (light version only) */}
//       <div className="relative max-w-6xl mx-auto px-4 sm:px-20 py-5">
//         <div className="py-12 md:py-20">
//           <div
//             className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4 text-center"
//             data-aos-id-stats
//           >
//             {/* 1st item */}
//             <div
//               className="bg-white py-8 px-1 shadow-2xl border border-gray-300 rounded-lg"
//               data-aos="fade-down"
//               data-aos-anchor="[data-aos-id-stats]"
//             >
//               <div className="font-red-hat-display text-3xl font-extrabold tracking-wide mb-1 font-mono">
//                 1K
//               </div>
//               <div className="text-gray-600">Total users</div>
//             </div>
//             {/* 2nd item */}
//             <div
//               className="bg-white py-8 px-1 shadow-2xl border border-gray-300 rounded-lg"
//               data-aos="fade-down"
//               data-aos-anchor="[data-aos-id-stats]"
//               data-aos-delay="100"
//             >
//               <div className="font-red-hat-display text-3xl font-extrabold tracking-wide mb-1 font-mono">
//                 7M
//               </div>
//               <div className="text-gray-600">Total Organizations</div>
//             </div>
//             {/* 3rd item */}
//             <div
//               className="bg-white py-8 px-1 shadow-2xl border border-gray-300 rounded-lg"
//               data-aos="fade-down"
//               data-aos-anchor="[data-aos-id-stats]"
//               data-aos-delay="200"
//             >
//               <div className="font-red-hat-display text-3xl font-extrabold tracking-wide mb-1 font-mono">
//                 1K
//               </div>
//               <div className="text-gray-600">Daily Posting</div>
//             </div>
//             {/* 4th item */}
//             <div
//               className="bg-white py-8 px-1 shadow-2xl border border-gray-300 rounded-lg"
//               data-aos="fade-down"
//               data-aos-anchor="[data-aos-id-stats]"
//               data-aos-delay="300"
//             >
//               <div className="font-red-hat-display text-3xl font-extrabold mb-1 font-mono">
//                 7.6%
//               </div>
//               <div className="text-gray-600">SignUp Rate</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Stats;

// // import styled from 'styled-components';

// // /* eslint-disable-next-line */
// // export interface StatsProps {}

// // const StyledStats = styled.div`
// //   color: pink;
// // `;

// // export function Stats(props: StatsProps) {
// //   return (
// //     <StyledStats>
// //       <h1>Welcome to Stats!</h1>
// //     </StyledStats>
// //   );
// // }

// // export default Stats;

// <div className="grid items-start max-w-sm gap-12 mx-auto md:gap-x-6 lg:gap-x-12 md:grid-cols-3 md:max-w-none">
//   {/* 1st item */}
//   <div className="relative flex flex-col items-center">
//     {/* Line connecting (1) and (2) */}
//     <div
//       aria-hidden="true"
//       className="absolute w-calc(100% - 48px) left-calc(50% + 48px) top-24 hidden h-px opacity-50 bg-gradient-to-r from-white via-teal-400 to-white dark:from-gray-900 dark:via-teal-400 dark:to-gray-900 md:block"
//       style={{
//         width: 'calc(100% - 48px)',
//         left: 'calc(50% + 48px)',
//         top: '24px',
//       }}
//     >
//       <div className="absolute inset-0 border-t border-white border-dashed dark:border-gray-900"></div>
//     </div>
//     {/* Number */}
//     <div className="flex items-center justify-center w-12 h-12 mb-8 font-medium text-white bg-teal-400 rounded-full dark:bg-teal-600 dark:bg-opacity-25 dark:text-teal-400 lg:mb-12">
//       1
//     </div>
//     {/* Mobile mockup */}
//     <div className="relative inline-flex items-center justify-center">
//       {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
//       <div className="absolute max-w-[84.33%]">
//         <Image
//           className=""
//           src={MockupImage02}
//           width="290"
//           height="624"
//           alt="App screen 02"
//         />
//       </div>
//       {/* iPhone mockup */}
//       <div className="relative h-auto max-w-full mx-auto pointer-events-none">
//         <Image
//           className=""
//           src={IphoneMockup}
//           width="344"
//           height="674"
//           alt="iPhone mockup"
//           aria-hidden="true"
//         />
//       </div>
//     </div>
//   </div>

//   {/* 2nd item */}
//   <div className="relative flex flex-col items-center">
//     {/* Line connecting (2) and (3) */}
//     <div
//       aria-hidden="true"
//       className="absolute hidden h-px opacity-50 bg-gradient-to-r from-white via-teal-400 to-white dark:from-gray-900 dark:via-teal-400 dark:to-gray-900 md:block"
//       style={{
//         width: 'calc(100% - 48px)',
//         left: 'calc(50% + 48px)',
//         top: '24px',
//       }}
//     >
//       <div className="absolute inset-0 border-t border-white border-dashed dark:border-gray-900"></div>
//     </div>
//     {/* Number */}
//     <div className="flex items-center justify-center w-12 h-12 mb-8 font-medium text-white bg-teal-400 rounded-full dark:bg-teal-600 dark:bg-opacity-25 dark:text-teal-400 lg:mb-12">
//       2
//     </div>
//     {/* Mobile mockup */}
//     <div className="relative inline-flex items-center justify-center">
//       {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
//       <div className="absolute max-w-[84.33%]">
//         <Image
//           className=""
//           src={MockupImage03}
//           width="290"
//           height="624"
//           alt="App screen 03"
//         />
//       </div>
//       {/* iPhone mockup */}
//       <div className="relative h-auto max-w-full mx-auto pointer-events-none">
//         <Image
//           className=""
//           src={IphoneMockup}
//           width="344"
//           height="674"
//           alt="iPhone mockup"
//           aria-hidden="true"
//         />
//       </div>
//     </div>
//   </div>

//   {/* 3rd item */}
//   <div className="relative flex flex-col items-center">
//     <div className="flex items-center justify-center w-12 h-12 mb-8 font-medium text-white bg-teal-400 rounded-full dark:bg-teal-600 dark:bg-opacity-25 dark:text-teal-400 lg:mb-12">
//       3
//     </div>
//     {/* Mobile mockup */}
//     <div className="relative inline-flex items-center justify-center">
//       {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
//       <div className="absolute max-w-[84.33%]">
//         <Image
//           className=""
//           src={MockupImage04}
//           width="290"
//           height="624"
//           alt="App screen 04"
//         />
//       </div>
//       {/* iPhone mockup */}
//       <div className="relative h-auto max-w-full mx-auto pointer-events-none">
//         <Image
//           className=""
//           src={IphoneMockup}
//           width="344"
//           height="674"
//           alt="iPhone mockup"
//           aria-hidden="true"
//         />
//       </div>
//     </div>
//   </div>
// </div>;
