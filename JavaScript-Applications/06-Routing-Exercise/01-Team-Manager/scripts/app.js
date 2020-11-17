const app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    this.get('/', function (context) {
        getTeams()
            .then(() => {
                getUserInfo(context);
                getInfoForHome(context);
                loadHeaderAndFooter(context)
                    .then(function () {
                        this.partial('./templates/home/home.hbs');
                    });
            });
    });

    this.get('/about', function (context) {
        getUserInfo(context);
        loadHeaderAndFooter(context)
            .then(function () {
                this.partial('./templates/about/about.hbs');
            });
    });

    this.get('/login', function (context) {
        loadHeaderAndFooter(context)
            .then(function () {
                this.loadPartials({
                    'loginForm': './templates/login/loginForm.hbs'
                })
            })
            .then(function () {
                this.partial('./templates/login/loginPage.hbs');
            });
    });

    this.get('/register', function (context) {
        loadHeaderAndFooter(context)
            .then(function () {
                this.loadPartials({
                    'registerForm': './templates/register/registerForm.hbs'
                })
            })
            .then(function () {
                this.partial('./templates/register/registerPage.hbs');
            });
    });

    this.get('/logout', function (context) {
        firebase.auth()
            .signOut()
            .then(() => {
                localStorage.removeItem('userInfo');
                localStorage.removeItem('teams');
                validInfo('Logged out!');
                context.redirect('/');
            })
            .catch((e) => invalidInfo(e.message));
    });

    this.get('/catalog', function (context) {
        getUserInfo(context);
        getTeams()
            .then(() => {
                getUserInfoForCatalog(context);
                let teams = localStorage.getItem('teams');
                context.teams = JSON.parse(teams);
            })
            .then(() => {
                loadHeaderAndFooter(context)
                    .then(function () {
                        this.loadPartials({
                            'team': './templates/catalog/team.hbs'
                        })
                    })
                    .then(function () {
                        this.partial('./templates/catalog/teamCatalog.hbs');
                    });
            });
    });

    this.get('/create', function (context) {
        getUserInfo(context);
        loadHeaderAndFooter(context)
            .then(function () {
                this.loadPartials({
                    'createForm': './templates/create/createForm.hbs'
                })
            })
            .then(function () {
                this.partial('./templates/create/createPage.hbs');
            });
    });

    this.get(`/catalog/:${(this.getLocation()).split(':')[1]}`, function (context) {
        getUserInfo(context);
        getUserInfoForCatalog(context);
        loadHeaderAndFooter(context)
            .then(function () {
                let id = context.path.split(':')[1];
                context.teamId = id;

                this.loadPartials({
                    'teamMember': './templates/catalog/teamMember.hbs',
                    'teamControls': './templates/catalog/teamControls.hbs'
                })
            })
            .then(function () {
                getTeamInfo(context);
                getInfoForDetails(context);
                this.partial('./templates/catalog/details.hbs');
            })
    })

    this.get(`/edit/:${(this.getLocation()).split(':')[1]}`, function (context) {
        getUserInfo(context);
        loadHeaderAndFooter(context)
            .then(function () {
                let teams = JSON.parse(localStorage.getItem('teams'));
                let id = context.path.split(':')[1];
                let team = teams.find(t => t._id === id);
                let {
                    name,
                    comment
                } = team;

                context.teamId = id;
                context.name = name;
                context.comment = comment;

                this.loadPartials({
                    'editForm': './templates/edit/editForm.hbs',
                })
            })
            .then(function () {
                this.partial('./templates/edit/editPage.hbs');
            })
    })

    this.get(`/join/:${(this.getLocation()).split(':')[1]}`, function (context) {
        let id = context.path.split(':')[1];
        let teams = JSON.parse(localStorage.getItem('teams'));
        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        let memberName = userInfo.email.split('@')[0].toUpperCase();

        if (teams.find(t => t.members.includes(memberName))) {
            invalidInfo(`You are already in a team. You can't join another one!`);
            return;
        }

        let {
            members
        } = teams.find(t => t._id === id);
        members.push(memberName);

        findTeamKey(id)
            .then((key) => {
                let body = {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        members
                    })
                }

                fetch(`https://team-manager-app-c3d53.firebaseio.com/teams/${key}.json`, body)
                    .then(() => {
                        context.redirect('/catalog')
                    });
            })
    })

    this.get('/leave', function (context) {
        let teams = JSON.parse(localStorage.getItem('teams'));
        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        let memberName = userInfo.email.split('@')[0].toUpperCase();
        let team = teams.find(t => t.members.includes(memberName));
        let {
            members,
            _id
        } = team;

        if (team.author === memberName) {
            invalidInfo(`You can't leave your own team!`);
            return;
        }

        let memberIndex = members.indexOf(memberName);
        members.splice(memberIndex, 1);

        findTeamKey(_id)
            .then((key) => {
                let body = {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        members
                    })
                }

                fetch(`https://team-manager-app-c3d53.firebaseio.com/teams/${key}.json`, body)
                    .then(() => {
                        context.redirect('/catalog')
                    });
            })
    })

    this.post('/register', function (context) {
        let {
            email,
            password,
            repeatPassword
        } = context.params;

        if (password !== repeatPassword) {
            invalidInfo('Password must be same with repeated password!');
            return;
        }

        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                validInfo('Succesfully registered!');
                context.redirect('/login')
            })
            .catch((e) => invalidInfo(e.message));
    });

    this.post('/login', function (context) {
        let {
            email,
            password
        } = context.params;

        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((userInfo) => {
                let {
                    user: {
                        email
                    }
                } = userInfo;
                localStorage.setItem('userInfo', JSON.stringify({
                    email
                }));
                validInfo('You have logged in!');
                context.redirect('/');
            })
            .catch((e) => invalidInfo(e.message));
    });

    this.post('/create', function (context) {
        let {
            name,
            comment
        } = context.params;
        createTeam(name, comment);
        context.redirect('/');
    })

    this.post(`/edit/:${(this.getLocation()).split(':')[1]}`, function (context) {
        let {
            name,
            comment
        } = context.params;
        let id = context.path.split(':')[1];

        findTeamKey(id)
            .then((key) => {
                let body = {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        comment
                    })
                }

                fetch(`https://team-manager-app-c3d53.firebaseio.com/teams/${key}.json`, body)
                    .then(() => context.redirect('/'));
            });
    });
});

function loadHeaderAndFooter(context) {
    return context.loadPartials({
        'header': './templates/common/header.hbs',
        'footer': './templates/common/footer.hbs'
    });
}

function invalidInfo(message) {
    let errorBox = document.getElementById('errorBox');
    errorBox.textContent = message;
    errorBox.style.display = 'block';

    setTimeout(() => errorBox.style.display = 'none', 3000);
}

function validInfo(message) {
    let infoBox = document.getElementById('infoBox');
    infoBox.textContent = message;
    infoBox.style.display = 'block';

    setTimeout(() => infoBox.style.display = 'none', 3000);
}

function getUserInfo(context) {
    let userInfo = localStorage.getItem('userInfo');

    if (userInfo) {
        let {
            email
        } = JSON.parse(userInfo);
        let username = email.split('@')[0];
        context.loggedIn = true;
        context.username = username.toUpperCase();
    }
}

function getUserInfoForCatalog(context) {
    let userInfo = localStorage.getItem('userInfo');
    let teams = localStorage.getItem('teams');

    if (userInfo && teams) {
        let {
            email
        } = JSON.parse(userInfo);
        let username = email.split('@')[0].toUpperCase();
        let team = JSON.parse(teams).find(t => t.members.includes(username));

        if (!team) {
            context.hasNoTeam = true;
        } else {
            context.hasNoTeam = false;
        }
    }
}

function getInfoForDetails(context) {
    let userInfo = localStorage.getItem('userInfo');
    let teams = localStorage.getItem('teams');

    if (userInfo && teams) {
        let {
            email
        } = JSON.parse(userInfo);
        let username = email.split('@')[0].toUpperCase();
        let currentId = context.path.split(':')[1];
        let currentTeam = JSON.parse(teams).find(t => t._id == currentId);

        if (currentTeam.members.includes(username)) {
            context.isOnTeam = true;
        } else {
            context.isOnTeam = false;
        }

        if (currentTeam.author === username) {
            context.isAuthor = true;
            context.teamId = currentId;
        } else {
            context.isAuthor = false;
        }
    }
}

function getTeamInfo(context) {
    let teams = localStorage.getItem('teams');
    let teamId = context.path.split(':')[1];

    let team = JSON.parse(teams).find(t => t._id == teamId);

    let teamMembers = team.members.map(m => {
        let username = m;
        return {
            username
        };
    });

    context.name = team.name;
    context.members = teamMembers;

    if (team.comment) {
        context.comment = team.comment;
    }
}

function getInfoForHome(context) {
    let teams = localStorage.getItem('teams');
    let userInfo = localStorage.getItem('userInfo');

    if (userInfo && teams) {
        let {
            email
        } = JSON.parse(userInfo);
        let username = email.split('@')[0].toUpperCase();
        let team = JSON.parse(teams).find(t => t.members.includes(username));

        if (!team) {
            context.hasTeam = false;
        } else {
            context.hasTeam = true;
            context.teamId = team._id;
        }
    }
}

async function getTeams() {
    let data = await fetch(`https://team-manager-app-c3d53.firebaseio.com/teams/.json`);
    let response = await data.json();

    let teams = [];
    Object.keys(response).forEach(key => {
        teams.push(response[key]);
    });

    localStorage.setItem('teams', JSON.stringify(teams));
};

async function findTeamKey(id) {
    let data = await fetch(`https://team-manager-app-c3d53.firebaseio.com/teams/.json`);
    let res = await data.json();
    let searchedKey = Object.keys(res).find(k => res[k]._id === id);

    return searchedKey;
}

function createTeam(name, comment) {
    let userInfo = localStorage.getItem('userInfo');
    let {
        email
    } = JSON.parse(userInfo);
    let username = email.split('@')[0].toUpperCase();

    let team = {
        _id: name[0],
        name,
        comment,
        author: username,
        members: [username]
    }

    let body = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(team)
    };

    fetch(`https://team-manager-app-c3d53.firebaseio.com/teams/.json`, body);
}

(() => {
    app.run('/');
})();