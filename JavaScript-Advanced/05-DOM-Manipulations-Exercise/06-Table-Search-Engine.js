function solve() {
   let tbodyElement = document.querySelector('tbody');
   let searchField = document.querySelector('#searchField');
   let searchBtn = document.querySelector('#searchBtn');

   searchBtn.addEventListener('click', function (e) {
      Array.from(tbodyElement.rows).forEach(row => {

         if (row.textContent.toLowerCase().includes(searchField.value.toLowerCase())) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      });

      searchField.value = '';
   });
}