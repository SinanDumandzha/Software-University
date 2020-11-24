import { homePage } from "/src/controllers/home.js";

import {
    registerPage,
    registerPost,
    loginPage,
    loginPost,
    logout,
} from "/src/controllers/user.js";

import {
    createOfferPage,
    createOfferPost,
    offerDetailsPage,
    editOfferPage,
    editPost,
    deleteOfferPost,
    buyItem,
} from "/src/controllers/catalog.js";

const app = Sammy("#root", function () {
    this.use("Handlebars", "hbs");

    this.get("#/home", homePage);

    this.get("/register", registerPage);
    this.post("/register", registerPost);
    this.get("/login", loginPage);
    this.post("/login", loginPost);
    this.get("/logout", logout);

    this.get("/create-offer", createOfferPage);
    this.post("/create-offer", createOfferPost);
    this.get("/:offerId/details", offerDetailsPage);
    this.get("/:offerId/edit-offer", editOfferPage);
    this.post("/:offerId/edit", editPost);
    this.get("/:offerId/delete-offer", deleteOfferPost);
    this.get("/:offerId/buy", buyItem);
});

app.run("#/home");
