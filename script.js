import animaScrool from './JS/initAnimaScroll';
import initDropDow from './JS/initDropDow';
import initAnimaNumeros from './JS/initNumeroAnimais';
import fetchBC from './JS/initBitCoin';
import initFuncionamento from './JS/initHorarios';
import ScrollSuave from './JS/initScroll';
import Accordion from './JS/initAcordion';
import TabNav from './JS/initTab';
import Modal from './JS/initModal';
import ToolTip from './JS/initTool';
// import fetchBC from './JS/initBitCoin';

const scrollsuave = new ScrollSuave('.js-menu a[href^="#"]');
scrollsuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new TabNav('.js-tabmenu li', '.js-tabcontent section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '.fechar', '.modal-container');
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

initAnimaNumeros();
fetchBC('https://blockchain.info/ticker', '.btc-preco');

animaScrool();
initDropDow();
initFuncionamento();
