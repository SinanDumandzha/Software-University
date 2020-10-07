function getArticleGenerator(articles) {
    let content = document.querySelector('#content');

    function showNext() {
        let article = document.createElement('article');

        if (articles.length !== 0) {
            article.textContent = articles.shift();
            content.appendChild(article);
        }
    }

    return showNext;
}