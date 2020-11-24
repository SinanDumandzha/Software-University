import { extendContext, errorHandler } from "/src/util.js";
import { database } from "/src/controllers/user.js";

export function homePage(context) {
    database
        .collection("offers")
        .get()
        .then((res) => {
            context.offers = res.docs.map((offer) => {
                return { id: offer.id, ...offer.data() };
            });

            extendContext(context).then(function () {
                this.partial("/templates/home.hbs");
            });
        })
        .catch(errorHandler);
}
