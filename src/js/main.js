// Import our custom CSS
import '../scss/styles.scss'

import { setupCounter } from './counter.js'
import { scrollTop } from './scroll-top';
// import { scrollToAnchor } from './scroll-to-anchor';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// You can also import JavaScript plugins individually as needed to keep bundle sizes down:
// import Alert from 'bootstrap/js/dist/alert';

// // or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';
// Read our JavaScript docs for more information on how to use Bootstrap’s plugins.

// function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// setupCounter(document.querySelector('#counter'))


// var moreinfo = document.getElementById('moreInfo');
// (() => {
//     var moreinfo = document.getElementById('moreInfo');
//     console.log('>>>LO !! G>>>', moreinfo);
// })()


scrollTop()
// scrollToAnchor()

// var d = document.getElementById('liveToastBtn');
// var f = document.getElementById('liveToast')
// d.addEventListener('click', function () {
//     var a = new bootstrap.Toast(f); a.show()
// });

document.getElementById("year").innerHTML = new Date().getFullYear();