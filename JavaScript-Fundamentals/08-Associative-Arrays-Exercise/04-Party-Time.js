function partyTime(input) {
    function createList(guestArray) {
        let guests = {
            vip: [],
            regular: [],
        };

        guestArray.forEach((guest) => {
            if (isNaN(Number(guest[0]))) {
                guests.regular.push(guest);
            } else {
                guests.vip.push(guest);
            }
        });
        return guests;
    }

    function removeGuests(arr, guestObject) {
        arr.forEach((guest) => {
            if (guestObject.vip.includes(guest)) {
                guestObject.vip.splice(guestObject.vip.indexOf(guest), 1);
            }
            if (guestObject.regular.includes(guest)) {
                guestObject.regular.splice(
                    guestObject.regular.indexOf(guest),
                    1
                );
            }
        });
        return guestObject;
    }

    function createOutput(guests) {
        let output = guests.vip.concat(guests.regular);
        return console.log(output.length + "\n" + output.join("\n"));
    }

    let partyIndex = input.indexOf("PARTY");
    let guestList = createList(input.slice(0, partyIndex));
    let removedList = removeGuests(input.slice(partyIndex + 1), guestList);
    return createOutput(removedList);
}

partyTime([
    "7IK9Yo0h",
    "9NoBUajQ",
    "Ce8vwPmE",
    "SVQXQCbc",
    "tSzE5t0p",
    "PARTY",
    "9NoBUajQ",
    "Ce8vwPmE",
    "SVQXQCbc",
]);
