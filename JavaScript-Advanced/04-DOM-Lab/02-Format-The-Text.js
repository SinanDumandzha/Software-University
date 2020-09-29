function solve() {
  let sentences = document
    .getElementById('input')
    .textContent.split('. ')
    .filter(sentence => sentence.length >= 1);

  let divElement = document.getElementById('output');

  for (let i = 0; i < sentences.length; i += 3) {
    let text = [sentences[i], sentences[i + 1], sentences[i + 2]]
      .filter(Boolean)
      .join('. ');

    let pElement = document.createElement('p');
    pElement.textContent = text;

    divElement.appendChild(pElement);
  }
}