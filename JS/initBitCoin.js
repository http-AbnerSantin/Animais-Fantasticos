export default function initBC() { 
  fetch('https://blockchain.info/ticker')
  .then((r) => r.json())
  .then((content) => {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerHTML = (1000 / content.BRL.sell).toFixed(4);
})
  .catch((erro) => console.log(Error(erro)));
}