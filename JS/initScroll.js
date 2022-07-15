export default function scroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  linksInternos.forEach((item) => {
    function scroolSuave(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      // const topo = section.offsetTop;

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',

      });
    }
    item.addEventListener('click', scroolSuave);
  });
}