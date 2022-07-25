export default function fetchBC(url, target) {
  fetch(url).then((r) => r.json()).then((content) => {
    const btcPreco = document.querySelector(target);
    btcPreco.innerHTML = (1000 / content.BRL.sell).toFixed(4);
  }).catch((erro) => console.log(Error(erro)));
}
// 'https://blockchain.info/ticker' '.btc-preco'
