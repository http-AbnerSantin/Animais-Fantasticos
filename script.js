import animaScrool from './JS/initAnimaScroll';
import initToolTip from './JS/initTool';
import initDropDow from './JS/initDropDow';
import initAnimaNumeros from './JS/initNumeroAnimais';
import initBC from './JS/initBitCoin';
import initFuncionamento from './JS/initHorarios';
import ScrollSuave from './JS/initScroll';
import Accordion from './JS/initAcordion';
import TabNav from './JS/initTab';
import Modal from './JS/initModal';

const scrollsuave = new ScrollSuave('.js-menu a[href^="#"]');
scrollsuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav('.js-tabmenu li', '.js-tabcontent section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '.fechar', '.modal-container');
modal.init();

animaScrool();
initToolTip();
initDropDow();
initAnimaNumeros();
initBC();
initFuncionamento();
