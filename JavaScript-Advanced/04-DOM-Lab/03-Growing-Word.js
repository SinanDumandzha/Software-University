function growingWord() {
  let pElement = document.querySelector('#exercise > p');

  let colors = {
    'blue': 'green',
    'green': 'red',
    'red': 'blue'
  };

  if (!pElement.hasAttribute('style')) {
    pElement.setAttribute('style', 'color: blue; font-size: 2px');
  } else {
    let size = Number(pElement.style.fontSize.split('').filter(Number).join('')) * 2;
    let color = colors[pElement.style.color];

    pElement.setAttribute('style', `color: ${color}; font-size: ${size}px`);
  }
}