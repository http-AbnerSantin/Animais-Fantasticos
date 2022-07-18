export default class Accordion {
  constructor(list) {
    this.acordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAcordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }
  // adiciona os events ao accordion

  addAccordionEvent() {
    this.acordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAcordion(item));
    });
  }

  // iniciar função
  init() {
    if (this.acordionList.length) {
      // ativar primeiro item
      this.toggleAcordion(this.acordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
