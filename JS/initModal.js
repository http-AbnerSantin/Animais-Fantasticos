export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const button = document.querySelector('.fechar');
  const modal = document.querySelector('.modal-container');

  function toggleModal(event) {
    event.preventDefault();
    modal.classList.toggle('ativoo');
  }

  function cliqueForaDoModal(event) {
    if (event.target === this) { toggleModal(event); }
  }

  btnAbrir.addEventListener('click', toggleModal);
  modal.addEventListener('click', cliqueForaDoModal);
  button.addEventListener('click', toggleModal);
}
