export function extendContext(context) {
    const user = getUserData();

    context.isLoggedIn = Boolean(getUserData());
    context.userEmail = user ? user.email : "";

    return context.loadPartials({
        header: "/templates/partials/header.hbs",
        footer: "/templates/partials/footer.hbs",
    });
}

export function getUserData() {
    const user = localStorage.getItem("user");

    return user ? JSON.parse(user) : null;
}

export function saveUserData(data) {
    const {
        user: { email, uid },
    } = data;

    localStorage.setItem("user", JSON.stringify({ email, uid }));
}

export function clearUserData() {
    window.localStorage.removeItem("user");
}

export function errorHandler(error) {}
