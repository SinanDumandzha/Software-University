function create(words) {
   let divElement = document.querySelector('div');
   let content = document.querySelector('#content');

   words.forEach(word => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.style.display = 'none';
      p.innerText = word;
      div.appendChild(p);
      content.appendChild(div);

      div.addEventListener('click', () => {
         p.style.display = 'block';
      });
   });
}