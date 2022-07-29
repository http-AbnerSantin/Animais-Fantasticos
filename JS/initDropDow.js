export default function initDropDow() {
  const dropdowMenus = document.querySelectorAll('[data-dropdow]');

  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);

        events.forEach((userEvent) => {
          html.removeEventListener(userEvent, handleOutsideClick);
        });
        callback();
      }
    }
    if (!element.hasAttribute(outside)) {
      events.forEach((userEvent) => {
        setTimeout(() => { html.addEventListener(userEvent, handleOutsideClick); });
      });
      element.setAttribute(outside, '');
    }
  }
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropdowMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  // menu Mobile

  function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart'];

    function openMenu(event) {
      event.preventDefault();
      menuList.classList.add('active');
      menuButton.classList.add('active');

      outsideClick(menuList, eventos, () => {
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
      });
    }

    eventos.forEach((userEvent) => menuButton.addEventListener(userEvent, openMenu));
  }
  initMenuMobile();
}
