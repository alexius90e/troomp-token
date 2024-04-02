const buyTokenButton = document.querySelector('.buy-token__token-code-button');
const buyTokenCodeNumber = document.querySelector('.buy-token__token-code-number');

if (buyTokenButton && buyTokenCodeNumber) {
  buyTokenButton.addEventListener('click', () => {
    navigator.clipboard.writeText(buyTokenCodeNumber.innerText);
    buyTokenButton.classList.add('active');
  });
}
