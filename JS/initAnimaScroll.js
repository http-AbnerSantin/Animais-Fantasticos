export default function animaScrool() {
  const animacao = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.6;

  animacao.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowMetade;

    if (sectionTop < 0) {
      section.classList.add('ativo');
    } else if (section.classList.contains('ativo')) {
      section.classList.remove('ativo');
    }
  });
  window.addEventListener('scroll', animaScrool);
}
