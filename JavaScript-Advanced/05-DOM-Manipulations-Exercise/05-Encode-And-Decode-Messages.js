function encodeAndDecodeMessages() {
    let sentMessage = document.querySelectorAll('textarea')[0];
    let recievedMessage = document.querySelectorAll('textarea')[1];
    let sendBtn = document.querySelectorAll('button')[0];
    let readBtn = document.querySelectorAll('button')[1];

    let decodedMessage = '';

    sendBtn.addEventListener('click', function (e) {
        decodedMessage = '';
        recievedMessage.value = '';

        let message = sentMessage.value;

        if (message) {
            message.split('').map(char => {
                decodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
            });

            recievedMessage.value = decodedMessage;
            sentMessage.value = '';
        }
    });

    readBtn.addEventListener('click', function (e) {
        recievedMessage.value = '';

        let encodedMessage = '';

        decodedMessage.split('').forEach(char => {
            encodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
        });

        recievedMessage.value = encodedMessage;
    });
}