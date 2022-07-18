/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./JS/initAcordion.js":
/*!****************************!*\
  !*** ./JS/initAcordion.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.acordionList = document.querySelectorAll(list);\n    this.activeClass = 'ativo';\n  }\n\n  toggleAcordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n  // adiciona os events ao accordion\n\n  addAccordionEvent() {\n    this.acordionList.forEach((item) => {\n      item.addEventListener('click', () => this.toggleAcordion(item));\n    });\n  }\n\n  // iniciar função\n  init() {\n    if (this.acordionList.length) {\n      // ativar primeiro item\n      this.toggleAcordion(this.acordionList[0]);\n      this.addAccordionEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-principal/./JS/initAcordion.js?");

/***/ }),

/***/ "./JS/initAnimaScroll.js":
/*!*******************************!*\
  !*** ./JS/initAnimaScroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaScrool)\n/* harmony export */ });\nfunction animaScrool() {\n  const animacao = document.querySelectorAll('.js-scroll');\n  const windowMetade = window.innerHeight * 0.6;\n\n  animacao.forEach((section) => {\n    const sectionTop = section.getBoundingClientRect().top - windowMetade;\n\n    if (sectionTop < 0) {\n      section.classList.add('ativo');\n    } else if (section.classList.contains('ativo')) {\n      section.classList.remove('ativo');\n    }\n  });\n  window.addEventListener('scroll', animaScrool);\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-principal/./JS/initAnimaScroll.js?");

/***/ }),

/***/ "./JS/initBitCoin.js":
/*!***************************!*\
  !*** ./JS/initBitCoin.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBC)\n/* harmony export */ });\nfunction initBC() {\n  fetch('https://blockchain.info/ticker').then((r) => r.json()).then((content) => {\n    const btcPreco = document.querySelector('.btc-preco');\n    btcPreco.innerHTML = (1000 / content.BRL.sell).toFixed(4);\n  }).catch((erro) => console.log(Error(erro)));\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-principal/./JS/initBitCoin.js?");

/***/ }),

/***/ "./JS/initDropDow.js":
/*!***************************!*\
  !*** ./JS/initDropDow.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDow)\n/* harmony export */ });\nfunction initDropDow() {\n  const dropdowMenus = document.querySelectorAll('[data-dropdow]');\n\n  function outsideClick(element, events, callback) {\n    const html = document.documentElement;\n    const outside = 'data-outside';\n\n    function handleOutsideClick(event) {\n      if (!element.contains(event.target)) {\n        element.removeAttribute(outside);\n\n        events.forEach((userEvent) => {\n          html.removeEventListener(userEvent, handleOutsideClick);\n        });\n        callback();\n      }\n    }\n    if (!element.hasAttribute(outside)) {\n      events.forEach((userEvent) => {\n        setTimeout(() => { html.addEventListener(userEvent, handleOutsideClick); });\n      });\n      element.setAttribute(outside, '');\n    }\n  }\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add('active');\n    outsideClick(this, ['touchstart', 'click'], () => {\n      this.classList.remove('active');\n    });\n  }\n\n  dropdowMenus.forEach((menu) => {\n    ['touchstart', 'click'].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n\n  // menu Mobile\n\n  function initMenuMobile() {\n    const menuButton = document.querySelector('[data-menu=\"button\"]');\n    const menuList = document.querySelector('[data-menu=\"list\"]');\n    const eventos = ['click', 'touchstart'];\n\n    function openMenu() {\n      menuList.classList.add('active');\n      menuButton.classList.add('active');\n\n      outsideClick(menuList, eventos, () => {\n        menuList.classList.remove('active');\n        menuButton.classList.remove('active');\n      });\n    }\n\n    eventos.forEach((userEvent) => menuButton.addEventListener(userEvent, openMenu));\n  }\n  initMenuMobile();\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-principal/./JS/initDropDow.js?");

/***/ }),

/***/ "./JS/initHorarios.js":
/*!****************************!*\
  !*** ./JS/initHorarios.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector('[data-semana]');\n\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n\n  const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;\n  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora <= horarioSemana[1]);\n\n  if (semanaAberta && horarioAberto) {\n    funcionamento.classList.add('ativado');\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-principal/./JS/initHorarios.js?");

/***/ }),

/***/ "./JS/initModal.js":
/*!*************************!*\
  !*** ./JS/initModal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(abrir, fechar, modal) {\n    this.btnAbrir = document.querySelector(abrir);\n    this.btnFechar = document.querySelector(fechar);\n    this.containerModal = document.querySelector(modal);\n\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.cliqueForaDoModal = this.cliqueForaDoModal.bind(this);\n  }\n\n  toggleModal() {\n    this.containerModal.classList.toggle('ativoo');\n  }\n\n  eventToggleModal(event) {\n    event.preventDefault();\n    this.toggleModal();\n  }\n\n  cliqueForaDoModal(event) {\n    if (event.target === this.containerModal) { this.toggleModal(event); }\n  }\n\n  addModalEvent() {\n    this.btnAbrir.addEventListener('click', this.eventToggleModal);\n    this.btnFechar.addEventListener('click', this.eventToggleModal);\n    this.containerModal.addEventListener('click', this.cliqueForaDoModal);\n  }\n\n  init() {\n    if (this.btnAbrir && this.btnFechar && this.containerModal) {\n      this.addModalEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-principal/./JS/initModal.js?");

/***/ }),

/***/ "./JS/initNumeroAnimais.js":
/*!*********************************!*\
  !*** ./JS/initNumeroAnimais.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]');\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = Math.floor(total / 200);\n      let start = 0;\n      const timer = setInterval(() => {\n        start += incremento;\n        numero.innerText = start;\n        if (start > total) {\n          clearInterval(timer);\n          numero.innerText = total;\n        }\n      }, 25 * Math.random());\n    });\n  }\n  //\n  let observer;\n\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n\n  const observeTarget = document.querySelector('.numeros');\n  observer = new MutationObserver(handleMutation);\n\n  observer.observe(observeTarget, { attributes: true });\n  //\n  function createAnimal(animal) {\n    const div = document.createElement('div');\n    div.classList.add('numero-animal');\n\n    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;\n    console.log(div);\n\n    return div;\n  }\n  //\n  async function fetchAnimais(url) {\n    try {\n      const animaisResponse = await fetch(url);\n      const response = await animaisResponse.json();\n      const numerosGrid = document.querySelector('.numeros-grid');\n\n      response.forEach((animal) => {\n        const divAnimal = createAnimal(animal);\n        numerosGrid.appendChild(divAnimal);\n      });\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n\n  fetchAnimais('./animaisapi.json');\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-principal/./JS/initNumeroAnimais.js?");

/***/ }),

/***/ "./JS/initScroll.js":
/*!**************************!*\
  !*** ./JS/initScroll.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(links, options) {\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = { behavior: 'smooth', block: 'start' };\n    } else {\n      this.options = options;\n    }\n\n    this.scroolToSection = this.scroolToSection.bind(this);\n  }\n\n  scroolToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n\n    section.scrollIntoView(this.options);\n  }\n\n  addLinkEvent() {\n    this.linksInternos.forEach((link) => {\n      link.addEventListener('click', this.scroolToSection);\n    });\n  }\n\n  init() {\n    if (this.linksInternos.length) {\n      this.addLinkEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-principal/./JS/initScroll.js?");

/***/ }),

/***/ "./JS/initTab.js":
/*!***********************!*\
  !*** ./JS/initTab.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = 'ativo';\n  }\n\n  activeTab(index) {\n    this.tabContent.forEach((section) => {\n      section.classList.remove(this.activeClass);\n    });\n    const direcao = this.tabContent[index].dataset.anime;\n    this.tabContent[index].classList.add(this.activeClass, direcao);\n  }\n\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => this.activeTab(index));\n    });\n  }\n\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-principal/./JS/initTab.js?");

/***/ }),

/***/ "./JS/initTool.js":
/*!************************!*\
  !*** ./JS/initTool.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initToolTip)\n/* harmony export */ });\nfunction initToolTip() {\n  const tooltips = document.querySelectorAll('[data-tooltip]');\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n    },\n  };\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouveleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    },\n  };\n\n  function criarTooltip(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n\n    document.body.appendChild(tooltipBox);\n\n    return tooltipBox;\n  }\n  function onMouseOver() {\n    const tooltipBox = criarTooltip(this);\n\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mousemove', onMouseMove);\n\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener('mouseleave', onMouseLeave);\n  }\n\n  tooltips.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos-principal/./JS/initTool.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JS_initAnimaScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JS/initAnimaScroll */ \"./JS/initAnimaScroll.js\");\n/* harmony import */ var _JS_initTool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JS/initTool */ \"./JS/initTool.js\");\n/* harmony import */ var _JS_initDropDow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JS/initDropDow */ \"./JS/initDropDow.js\");\n/* harmony import */ var _JS_initNumeroAnimais__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JS/initNumeroAnimais */ \"./JS/initNumeroAnimais.js\");\n/* harmony import */ var _JS_initBitCoin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JS/initBitCoin */ \"./JS/initBitCoin.js\");\n/* harmony import */ var _JS_initHorarios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JS/initHorarios */ \"./JS/initHorarios.js\");\n/* harmony import */ var _JS_initScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JS/initScroll */ \"./JS/initScroll.js\");\n/* harmony import */ var _JS_initAcordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./JS/initAcordion */ \"./JS/initAcordion.js\");\n/* harmony import */ var _JS_initTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./JS/initTab */ \"./JS/initTab.js\");\n/* harmony import */ var _JS_initModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JS/initModal */ \"./JS/initModal.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst scrollsuave = new _JS_initScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('.js-menu a[href^=\"#\"]');\nscrollsuave.init();\n\nconst accordion = new _JS_initAcordion__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('[data-anime=\"accordion\"] dt');\naccordion.init();\n\nconst tabnav = new _JS_initTab__WEBPACK_IMPORTED_MODULE_8__[\"default\"]('.js-tabmenu li', '.js-tabcontent section');\ntabnav.init();\n\nconst modal = new _JS_initModal__WEBPACK_IMPORTED_MODULE_9__[\"default\"]('[data-modal=\"abrir\"]', '.fechar', '.modal-container');\nmodal.init();\n\n(0,_JS_initAnimaScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_JS_initTool__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_JS_initDropDow__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_JS_initNumeroAnimais__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_JS_initBitCoin__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_JS_initHorarios__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n\n//# sourceURL=webpack://animais-fantasticos-principal/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;