function loadCommits() {
    let username = document.querySelector('#username').value;
    let repository = document.querySelector('#repo').value;
    let commits = document.querySelector('#commits');

    const url = `https://api.github.com/repos/${username}/${repository}/commits`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`${response.status} (${response.statusText})`);
            }
        })
        .then(response => {
            response.forEach(commitInfo => {
                let li = document.createElement('li');
                li.innerText = `${commitInfo.commit.author.name}: ${commitInfo.commit.message}`;
                commits.appendChild(li);
            });
        })
        .catch(error => {
            let li = document.createElement('li');
            li.innerText = `${error}`;

            commits.appendChild(li);
        });
}