function createArticle() {
	let articlesElement = document.getElementById("articles");
	let titleInputElement = document.getElementById("createTitle");
	let textareaInputElement = document.getElementById("createContent");

	let articleElement = document.createElement("article");
	let h3Element = document.createElement("h3");
	let pElement = document.createElement("p");

	if (titleInputElement.value !== "" && textareaInputElement.value !== "") {
		h3Element.textContent = titleInputElement.value;
		pElement.textContent = textareaInputElement.value;

		articleElement.appendChild(h3Element);
		articleElement.appendChild(pElement);
		articlesElement.appendChild(articleElement);
	}

	titleInputElement.value = "";
	textareaInputElement.value = "";
}