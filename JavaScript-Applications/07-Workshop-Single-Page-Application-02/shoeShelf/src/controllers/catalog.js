import { database } from "/src/controllers/user.js";

import { extendContext, getUserData, errorHandler } from "/src/util.js";

export function createOfferPage(context) {
    extendContext(context).then(function () {
        this.partial("/templates/createOffer.hbs");
    });
}

export function createOfferPost(context) {
    const { productName, price, imageUrl, description, brand } = context.params;

    database
        .collection("offers")
        .add({
            productName,
            price,
            imageUrl,
            description,
            brand,
            creator: getUserData().uid,
            clients: [],
        })
        .then((createdProduct) => {
            console.log(this);

            this.redirect("#/home");
        })
        .catch(errorHandler);
}

export function offerDetailsPage(context) {
    const { offerId } = context.params;

    database
        .collection("offers")
        .doc(offerId)
        .get()
        .then((res) => {
            const { uid } = getUserData();
            const actualOfferData = res.data();

            const isCreator = actualOfferData.creator === uid;
            const userIndex = actualOfferData.clients.indexOf(uid);
            const isInTheClientList = userIndex > -1;

            context.offer = {
                ...res.data(),
                isCreator,
                id: offerId,
                isInTheClientList,
            };

            extendContext(context).then(function () {
                this.partial("/templates/details.hbs");
            });
        });
}

export function editOfferPage(context) {
    const { offerId } = context.params;

    database
        .collection("offers")
        .doc(offerId)
        .get()
        .then((res) => {
            context.offer = { id: offerId, ...res.data() };

            extendContext(context).then(function () {
                this.partial("/templates/editOffer.hbs");
            });
        });
}

export function editPost(context) {
    const {
        offerId,
        productName,
        price,
        brand,
        description,
        imageUrl,
    } = context.params;

    database
        .collection("offers")
        .doc(offerId)
        .get()
        .then((res) => {
            return database
                .collection("offers")
                .doc(offerId)
                .set({
                    ...res.data(),
                    productName,
                    price,
                    brand,
                    description,
                    imageUrl,
                });
        })
        .then((res) => {
            this.redirect(`#/${offerId}/details`);
        })
        .catch(errorHandler);
}

export function deleteOfferPost(context) {
    const { offerId } = context.params;

    database
        .collection("offers")
        .doc(offerId)
        .delete()
        .then(() => {
            this.redirect("#/home");
        })
        .catch(errorHandler);
}

export function buyItem(context) {
    const { offerId } = context.params;
    const { uid } = getUserData();

    database
        .collection("offers")
        .doc(offerId)
        .get()
        .then((res) => {
            const offerData = { ...res.data() };
            offerData.clients.push(uid);

            return database.collection("offers").doc(offerId).set(offerData);
        })
        .then(() => {
            this.redirect("/:offerId/details");
        })
        .catch(errorHandler);
}
