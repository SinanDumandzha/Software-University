const apiKey = 'AIzaSyCXnhCI0-RDmrlCcztuK8DSiLC5G9if65Y';
const signInUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
const signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
const dbUrl = 'https://movies-app-a24d8.firebaseio.com';

const request = async (url, method, body) => {
    let options = {
        method,
    };

    if (body) {
        Object.assign(options, {
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }

    let res = await fetch(url, options);

    let data = await res.json();

    return data;
}

const authService = {
    async login(email, password) {
        let res = await fetch(`${signInUrl}${apiKey}`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        let data = await res.json();

        localStorage.setItem('auth', JSON.stringify(data));

        return data;
    },

    getData() {
        try {
            let data = JSON.parse(localStorage.getItem('auth'));

            return {
                isAuthenticated: Boolean(data.idToken),
                email: data.email,
            };
        } catch (error) {
            return {
                isAuthenticated: false,
                email: ''
            };
        }
    },

    logout() {
        localStorage.setItem('auth', '');
    },

    async register(email, password) {
        let response = await fetch(`${signUpUrl}${apiKey}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        let data = await response.json();

        localStorage.setItem('auth', JSON.stringify(data));

        return data;
    },
};

const movieService = {
    async addMovie(movieData) {
        let res = await request(`${dbUrl}/movies.json`, 'POST', movieData);

        return res;
    },

    async getAll(searchText) {
        let res = await request(`${dbUrl}/movies.json`, 'GET');

        return Object.keys(res).map(key => Object.assign(res[key], {
            key
        })).filter(x => !searchText || searchText == x.title);
    },

    async getOne(id) {
        let res = await request(`${dbUrl}/movies/${id}.json`, 'GET');
        let {
            email
        } = authService.getData();

        let likes = Object.values(res.likes || {});
        let alreadyLiked = likes.some(x => x.creator == email);

        return Object.assign(res, {
            isCreator: res.creator == email,
            alreadyLiked,
            likes: likes.length
        });
    },

    async editMovie(id, movie) {
        let res = await request(`${dbUrl}/movies/${id}.json`, 'PATCH', movie);

        return res;
    },

    async deleteMovie(id) {
        let res = await request(`${dbUrl}/movies/${id}.json`, 'DELETE');

        return res;
    },

    async likeMovie(id, creator) {
        let res = await request(`${dbUrl}/movies/${id}/likes.json`,
            'POST', {
                creator
            });

        return res;
    }
}