// export function scrollToAnchor() {

//   (function scrollToDataAttrAuto(dataAttrName) {
//     // const links = document.querySelectorAll(`a[href^="#"]`);
//     const elements = document.querySelectorAll(`[${dataAttrName}]`);
//     const elementMap = new Map();

//     for (let element of elements) {
//       const key = element.getAttribute(dataAttrName);
//       elementMap.set(key, element);
//     }

//     function scrollHandler(event) {
//       event.preventDefault();
//       const target = event.target;
//       if (target.matches('a[href^="#"]')) {
//         const key = target.getAttribute('href').slice(1);
//         const element = elementMap.get(key);
//         if (element) {
//           const offsetTop = element.getBoundingClientRect().top;
//           window.scrollTo({
//             top: window.pageYOffset + offsetTop,
//             behavior: 'smooth'
//           });
//         }
//       }
//     }

//     const debouncedScrollHandler = debounce(scrollHandler, 100);
//     document.addEventListener('click', debouncedScrollHandler, { passive: false });

//     function cleanup() {
//       document.removeEventListener('click', debouncedScrollHandler);
//     }

//     return cleanup;
//   }
//   )('data-anchor-scroll');

//   function debounce(fn, delay) {
//     let timeoutId;
//     return function (...args) {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         fn.apply(this, args);
//       }, delay);
//     };
//   }

// }
