import initTab from './JS/initTab.js';
import initAcordion from './JS/initAcordion.js';
import ScrollSuave from './JS/initScroll.js';
import animaScrool from './JS/initAnimaScroll.js';
import initModal from './JS/initModal.js';
import initToolTip from './JS/initTool.js';
import initDropDow from './JS/initDropDow.js';
import initAnimaNumeros from './JS/initNumeroAnimais.js';
import initBC from './JS/initBitCoin.js';
import initFuncionamento from './JS/initHorarios.js';

const scrollsuave = new ScrollSuave('.js-menu a[href^="#"]');
scrollsuave.init();

initTab();
initAcordion();
animaScrool();
initModal();
initToolTip();
initDropDow();
initAnimaNumeros();
initBC();
initFuncionamento();
