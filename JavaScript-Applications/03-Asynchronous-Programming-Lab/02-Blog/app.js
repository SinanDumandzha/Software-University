function attachEvents() {
    let loadPostsButton = document.querySelector('#btnLoadPosts');
    let viewButton = document.querySelector('#btnViewPost');
    let selector = document.querySelector('#posts');
    let postTitleH1 = document.querySelector('#post-title');
    let postBodyUl = document.querySelector('#post-body');
    let postCommentsUl = document.querySelector('#post-comments');

    const baseUrl = `https://blog-apps-c12bf.firebaseio.com/`;

    loadPostsButton.addEventListener('click', () => {
        fetch(baseUrl + '/posts.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`${response.status} (${response.statusText})`);
                }
            })
            .then(data => {
                Object.keys(data).forEach(key => {
                    let option = document.createElement('option');
                    option.setAttribute(`value`, `${key}`);
                    option.innerText = `${data[key].title}`;
                    selector.appendChild(option);
                });
            })
            .catch(error => `${error}`);
    });

    viewButton.addEventListener('click', () => {
        let selectedPostId = selector.value;

        fetch(baseUrl + `/posts/${selectedPostId}.json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`${response.status} (${response.statusText})`);
                }
            })
            .then(data => {
                postTitleH1.innerText = `${data.title}`;
                postBodyUl.innerText = `${data.body}`;
                postCommentsUl.innerText = '';

                data.comments.forEach(comment => {
                    let li = document.createElement('li');
                    li.setAttribute(`id`, `${data.id}`);
                    li.innerText = `${comment.text}`;
                    postCommentsUl.appendChild(li);
                });
            })
            .catch(error => `${error}`);
    })
}

attachEvents();