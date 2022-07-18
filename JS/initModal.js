export default class Modal {
  constructor(abrir, fechar, modal) {
    this.btnAbrir = document.querySelector(abrir);
    this.btnFechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(modal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaDoModal = this.cliqueForaDoModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativoo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaDoModal(event) {
    if (event.target === this.containerModal) { this.toggleModal(event); }
  }

  addModalEvent() {
    this.btnAbrir.addEventListener('click', this.eventToggleModal);
    this.btnFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaDoModal);
  }

  init() {
    if (this.btnAbrir && this.btnFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
