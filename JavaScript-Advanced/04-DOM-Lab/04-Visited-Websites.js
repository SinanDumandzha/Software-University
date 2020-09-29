function solve() {
    let links = document.querySelectorAll(".link-1");

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
            countClicks(links[i]);
        })
    }

    function countClicks(link) {
        let pElement = link.lastElementChild;
        pElement.textContent = `visited ${Number(pElement.textContent[8]) + 1} times`;
    }
}