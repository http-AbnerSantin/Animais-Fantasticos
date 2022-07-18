import initTab from './JS/initTab';
import animaScrool from './JS/initAnimaScroll';
import initModal from './JS/initModal';
import initToolTip from './JS/initTool';
import initDropDow from './JS/initDropDow';
import initAnimaNumeros from './JS/initNumeroAnimais';
import initBC from './JS/initBitCoin';
import initFuncionamento from './JS/initHorarios';
import ScrollSuave from './JS/initScroll';
import Accordion from './JS/initAcordion';

const scrollsuave = new ScrollSuave('.js-menu a[href^="#"]');
scrollsuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initTab();
animaScrool();
initModal();
initToolTip();
initDropDow();
initAnimaNumeros();
initBC();
initFuncionamento();
