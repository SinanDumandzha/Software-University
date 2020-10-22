function solve() {
    let onScreenButton = document.querySelector('#add-new button');
    onScreenButton.addEventListener('click', onScreen);

    let nameInput = document.querySelectorAll('#container input')[0];
    let hallInput = document.querySelectorAll('#container input')[1];
    let ticketPriceInput = document.querySelectorAll('#container input')[2];

    function onScreen(e) {
        e.preventDefault();

        if (!(nameInput.value) || !(hallInput.value) || !Number(ticketPriceInput.value)) {
            return;
        }

        let moviesSectionUl = document.querySelector('#movies ul');

        let li = document.createElement('li');

        let span = document.createElement('span');
        span.innerText = `${nameInput.value}`;
        li.appendChild(span);

        let liStrong = document.createElement('strong');
        liStrong.innerText = `Hall: ${hallInput.value}`;
        li.appendChild(liStrong);

        let divMoviesSection = document.createElement('div');

        let divStrong = document.createElement('strong');
        divStrong.innerText = `${Number(ticketPriceInput.value).toFixed(2)}`;
        divMoviesSection.appendChild(divStrong);

        let ticketsSoldInput = document.createElement('input');
        ticketsSoldInput.setAttribute('placeholder', 'Tickets Sold');
        divMoviesSection.appendChild(ticketsSoldInput);

        let archiveButton = document.createElement('button');
        archiveButton.innerText = 'Archive';
        divMoviesSection.appendChild(archiveButton);
        archiveButton.addEventListener('click', archive);

        li.appendChild(divMoviesSection);

        moviesSectionUl.appendChild(li);

        nameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = '';
    }

    function archive(e) {
        let ticketsSoldInputParent = e.currentTarget.parentElement;
        let ticketsSoldInput = ticketsSoldInputParent.querySelector('input');

        if (!Number(ticketsSoldInput.value) || !(ticketsSoldInput.value)) {
            return;
        }

        let archiveSectionUl = document.querySelector('#archive ul');

        let movieInfoParentDiv = e.currentTarget.parentElement;
        let movieInfo = movieInfoParentDiv.parentElement;

        archiveSectionUl.appendChild(movieInfo);

        let ticketsCount = movieInfoParentDiv.querySelector('input');
        let ticketPrice = movieInfoParentDiv.querySelector('strong');

        movieInfo.querySelector('input').remove();

        let archiveStrong = movieInfo.querySelector('Strong');
        let totalAmount = Number(ticketPrice.textContent) * Number(ticketsCount.value);
        archiveStrong.innerText = `Total amount: ${totalAmount.toFixed(2)}`;

        movieInfo.querySelector('div strong').remove();

        movieInfoParentDiv.remove();

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', deleteMovie);
        movieInfo.appendChild(deleteButton);
    }

    function deleteMovie(e) {
        let movieParentDiv = e.currentTarget.parentElement;
        let movieParentLi = movieParentDiv.parentElement;

        movieParentLi.remove();
    }

    let clearButton = document.querySelector('#archive button');
    clearButton.addEventListener('click', clear);

    function clear(e) {
        let listParentUl = e.currentTarget.parentElement;
        let listLi = listParentUl.querySelectorAll('li');

        Array.from(listLi).forEach((movie) => {
            movie.remove();
        });
    }
}