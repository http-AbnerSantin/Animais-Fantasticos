export default class AnimaScrool {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.ScrollAnima = this.ScrollAnima.bind(this);
  }

  ScrollAnima() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - this.windowMetade;

      if (sectionTop < 0) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    window.addEventListener('scroll', this.ScrollAnima);
  }
}
