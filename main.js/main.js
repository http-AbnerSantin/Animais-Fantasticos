(()=>{"use strict";new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scroolToSection=this.scroolToSection.bind(this)}scroolToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scroolToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('.js-menu a[href^="#"]').init(),new class{constructor(t){this.acordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAcordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.acordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAcordion(t)))}))}init(){return this.acordionList.length&&(this.toggleAcordion(this.acordionList[0]),this.addAccordionEvent()),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}(".js-tabmenu li",".js-tabcontent section").init(),new class{constructor(t,e,o){this.btnAbrir=document.querySelector(t),this.btnFechar=document.querySelector(e),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaDoModal=this.cliqueForaDoModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativoo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}cliqueForaDoModal(t){t.target===this.containerModal&&this.toggleModal(t)}addModalEvent(){this.btnAbrir.addEventListener("click",this.eventToggleModal),this.btnFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueForaDoModal)}init(){return this.btnAbrir&&this.btnFechar&&this.containerModal&&this.addModalEvent(),this}}('[data-modal="abrir"]',".fechar",".modal-container").init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.toolyipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouveleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}criarTooltip(t){const e=document.createElement("div"),o=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=o,document.body.appendChild(e),this.tooltipBox=e}onMouseOver({currentTarget:t}){this.criarTooltip(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}addToolTipsEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addToolTipsEvent(),this}}("[data-tooltip]").init(),function(){let t;const e=document.querySelector(".numeros");t=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,o=Math.floor(e/200);let i=0;const s=setInterval((()=>{i+=o,t.innerText=i,i>e&&(clearInterval(s),t.innerText=e)}),25*Math.random())})))})),t.observe(e,{attributes:!0}),async function(t){try{const t=await fetch("./animaisapi.json"),e=await t.json(),o=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3> <span data-numero>${t.total}</span>`,console.log(e),e}(t);o.appendChild(e)}))}catch(t){console.log(t)}}()}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerHTML=(1e3/t.BRL.sell).toFixed(4)})).catch((t=>console.log(Error(t)))),new class{constructor(t){this.sections=document.querySelectorAll(t),this.windowMetade=.6*window.innerHeight,this.checkDistance=function(t,e){let o;return(...e)=>{o&&clearTimeout(o),o=setTimeout((()=>{t(...e),o=null}),200)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.windowMetade)}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}init(){return this.sections.length?(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)):window.alert("erro"),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}(".js-scroll").init(),function(){function t(t,e,o){const i=document.documentElement,s="data-outside";function n(a){t.contains(a.target)||(t.removeAttribute(s),e.forEach((t=>{i.removeEventListener(t,n)})),o())}t.hasAttribute(s)||(e.forEach((t=>{setTimeout((()=>{i.addEventListener(t,n)}))})),t.setAttribute(s,""))}function e(e){e.preventDefault(),this.classList.add("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdow]").forEach((t=>{["touchstart","click"].forEach((o=>{t.addEventListener(o,e)}))})),function(){const e=document.querySelector('[data-menu="button"]'),o=document.querySelector('[data-menu="list"]'),i=["click","touchstart"];function s(){o.classList.add("active"),e.classList.add("active"),t(o,i,(()=>{o.classList.remove("active"),e.classList.remove("active")}))}i.forEach((t=>e.addEventListener(t,s)))}()}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),o=t.dataset.horario.split(",").map(Number),i=new Date,s=i.getDay(),n=i.getHours(),a=-1!==e.indexOf(s),c=n>=o[0]&&n<=o[1];a&&c&&t.classList.add("ativado")}()})();