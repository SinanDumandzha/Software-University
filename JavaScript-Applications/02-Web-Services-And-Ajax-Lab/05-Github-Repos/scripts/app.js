function loadRepos() {
	const httpRequest = new XMLHttpRequest();
	const username = document.querySelector('#username').value;
	const url = `https://api.github.com/users/${username}/repos`;
	const reposElement = document.querySelector('#repos');

	httpRequest.addEventListener('readystatechange', function () {
		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
			let repos = JSON.parse(httpRequest.responseText);
			reposElement.innerHTML = repos.map(x => `<li><a href="${x.html_url}" target="_blank">${x.name}</a></li>`).join('');
		}
	});

	httpRequest.open('GET', url);
	httpRequest.send();
}