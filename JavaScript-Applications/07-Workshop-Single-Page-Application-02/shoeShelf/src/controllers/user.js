import init from "/src/db-config.js";
init();

export const database = firebase.firestore();
const userModel = firebase.auth();

import {
    extendContext,
    saveUserData,
    clearUserData,
    errorHandler,
} from "/src/util.js";

export function registerPage(context) {
    extendContext(context).then(function () {
        this.partial("/templates/register.hbs");
    });
}

export function registerPost(context) {
    const { email, password, rePassword } = context.params;

    if (password !== rePassword) {
        return;
    }

    userModel
        .createUserWithEmailAndPassword(email, password)
        .then((userData) => {
            this.redirect("#/login");
        })
        .catch(errorHandler);
}

export function loginPage(context) {
    extendContext(context).then(function () {
        this.partial("/templates/login.hbs");
    });
}

export function loginPost(context) {
    const { email, password } = context.params;

    userModel
        .signInWithEmailAndPassword(email, password)
        .then((userData) => {
            saveUserData(userData);

            this.redirect("#/home");
        })
        .catch(errorHandler);
}

export function logout(context) {
    userModel
        .signOut()
        .then((res) => {
            clearUserData();

            this.redirect("#/home");
        })
        .catch(errorHandler);
}
