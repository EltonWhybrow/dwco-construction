export function scrollTop() {

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

}
