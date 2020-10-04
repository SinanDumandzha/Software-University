function solve() {
   let cards = document.getElementsByTagName('img');

   let player1CurrentCard = 0;
   let player1CardNode;
   let player2CurrentCard = 0;
   let player2CardNode;

   for (const card of cards) {
      card.addEventListener('click', function (e) {
         card.setAttribute('src', 'images/whiteCard.jpg');

         let parentID = this.parentNode.getAttribute('id');

         if (parentID === 'player1Div') {
            let player1Span = document.querySelectorAll('#result span')[0];
            let name = this.getAttribute('name');

            player1CurrentCard = Number(name);
            player1CardNode = this;;
            player1Span.textContent = name;
         } else if (parentID === 'player2Div') {
            let player2Span = document.querySelectorAll('#result span')[2];
            let name = this.getAttribute('name');

            player2CurrentCard = Number(name);
            player2CardNode = this;
            player2Span.textContent = name;
         }

         if (player1CurrentCard > player2CurrentCard && player1CurrentCard !== 0 && player2CurrentCard !== 0) {
            player1CardNode.style = 'border: 2px solid green';
            player2CardNode.style = 'border: 2px solid red';

            document.getElementById('history').textContent += `[${player1CurrentCard} vs ${player2CurrentCard}] `;

            let player1CurrentResult = document.querySelectorAll('#result span')[0];
            let player2CurrentResult = document.querySelectorAll('#result span')[2];

            player1CurrentResult.innerHTML = '';
            player2CurrentResult.innerHTML = '';
            player1CurrentCard = 0;
            player2CurrentCard = 0;
         } else if (player1CurrentCard < player2CurrentCard && player1CurrentCard !== 0 && player2CurrentCard !== 0) {
            player2CardNode.style = 'border: 2px solid green';
            player1CardNode.style = 'border: 2px solid red';

            document.getElementById('history').textContent += `[${player1CurrentCard} vs ${player2CurrentCard}] `;

            let player1CurrentResult = document.querySelectorAll('#result span')[0];
            let player2CurrentResult = document.querySelectorAll('#result span')[2];

            player1CurrentResult.innerHTML = '';
            player2CurrentResult.innerHTML = '';
            player1CurrentCard = 0;
            player2CurrentCard = 0;
         } else if (player1CurrentCard === player2CurrentCard) {
            let player1CurrentResult = document.querySelectorAll('#result span')[0];
            let player2CurrentResult = document.querySelectorAll('#result span')[2];

            document.getElementById('history').textContent += `[${player1CurrentCard} vs ${player2CurrentCard}] `;

            player1CurrentResult.innerHTML = '';
            player2CurrentResult.innerHTML = '';
            player1CurrentCard = 0;
            player2CurrentCard = 0;
         }
      });
   }
}