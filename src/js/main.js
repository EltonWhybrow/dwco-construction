// Import our custom CSS
import '../scss/styles.scss'
import { setupCounter } from './counter.js'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// You can also import JavaScript plugins individually as needed to keep bundle sizes down:


// import Alert from 'bootstrap/js/dist/alert';

// // or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';
// Read our JavaScript docs for more information on how to use Bootstrap’s plugins.
(function scrollToDataAttrAuto(dataAttrName) {
    const links = document.querySelectorAll(`a[href^="#"]`);
    const elements = document.querySelectorAll(`[${dataAttrName}]`);
    const elementMap = new Map();

    for (let element of elements) {
        const key = element.getAttribute(dataAttrName);
        elementMap.set(key, element);
    }

    function scrollHandler(event) {
        event.preventDefault();
        const target = event.target;
        if (target.matches('a[href^="#"]')) {
            const key = target.getAttribute('href').slice(1);
            const element = elementMap.get(key);
            if (element) {
                const offsetTop = element.getBoundingClientRect().top;
                window.scrollTo({
                    top: window.pageYOffset + offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }

    const debouncedScrollHandler = debounce(scrollHandler, 100);
    document.addEventListener('click', debouncedScrollHandler, { passive: false });

    function cleanup() {
        document.removeEventListener('click', debouncedScrollHandler);
    }

    return cleanup;
}
)('data-anchor-scroll');

function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

var scrollTop = document.getElementById('scrollTop');
scrollTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const viewHeight = window.innerHeight;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > viewHeight) {
        scrollTop.classList.add('scrolled-past');
    } else {
        scrollTop.classList.remove('scrolled-past');
    }
});

setupCounter(document.querySelector('#counter'));