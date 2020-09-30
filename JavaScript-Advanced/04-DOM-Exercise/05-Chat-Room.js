function solve() {
   let button = document.querySelector('#send');
   let messages = document.querySelector('#chat_messages');
   let input = document.querySelector('#chat_input');


   button.addEventListener('click', function () {
      if (input.value) {
         let newMessage = document.createElement('div');
         newMessage.setAttribute('class', 'message my-message');
         newMessage.innerText = input.value;
         messages.appendChild(newMessage);

         input.value = '';
      }
   });
}