export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 200);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          clearInterval(timer);
          numero.innerText = total;
        }
      }, 25 * Math.random());
    });
  }
  //
  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observeTarget = document.querySelector('.numeros');
  observer = new MutationObserver(handleMutation);

  observer.observe(observeTarget, { attributes: true });
  //
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;
    console.log(div);

    return div;
  }
  //
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const response = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      response.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./animaisapi.json');
}
