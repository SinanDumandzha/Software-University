function skiTrip(tripDays, roomType, grade) {

    tripDays = Number(tripDays);
    tripDays -= 1;

    let price = 0;
    let finalPrice = 0;

    if (roomType === 'room for one person') {

        if (grade === 'positive') {
            price = (tripDays * 18.00);
            finalPrice = price + (price * 0.25);
            console.log(finalPrice.toFixed(2));

        } else if (grade === 'positive') {
            price = (tripDays * 18.00);
            finalPrice = price * 0.90;
            console.log(finalPrice.toFixed(2));
        }
    }
    if (roomType === 'apartment') {

        if (tripDays < 10) {

            if (grade === 'positive') {
                price = ((tripDays * 25.00) * 0.7);
                finalPrice = price + (price * 0.25);
                console.log(finalPrice.toFixed(2));

            } else if (grade === 'negative') {
                price = ((tripDays * 25.00) * 0.7);
                finalPrice = price * 0.90;
                console.log(finalPrice.toFixed(2));
            }

        } else if (tripDays >= 10 && tripDays <= 15) {

            if (grade === 'positive') {
                price = ((tripDays * 25.00) * 0.65);
                finalPrice = price + (price * 0.25);
                console.log(finalPrice.toFixed(2));

            } else if (grade === 'negative') {
                price = ((tripDays * 25.00) * 0.65);
                finalPrice = price * 0.90;
                console.log(finalPrice.toFixed(2));
            }

        } else if (tripDays > 15) {

            if (grade === 'positive') {
                price = ((tripDays * 25.00) * 0.50);
                finalPrice = price + (price * 0.25);
                console.log(finalPrice.toFixed(2));

            } else if (grade === 'negative') {
                price = ((tripDays * 25.00) * 0.50);
                finalPrice = price * 0.90;
                console.log(finalPrice.toFixed(2));
            }
        }
    }
    if (roomType === 'president apartment') {

        if (tripDays < 10) {

            if (grade === 'positive') {
                price = ((tripDays * 35.00) * 0.9);
                finalPrice = price + (price * 0.25);
                console.log(finalPrice.toFixed(2));

            } else if (grade === 'negative') {
                price = ((tripDays * 35.00) * 0.9);
                finalPrice = price * 0.90;
                console.log(finalPrice.toFixed(2));
            }

        } else if (tripDays >= 10 && tripDays <= 15) {

            if (grade === 'positive') {
                price = ((tripDays * 35.00) * 0.85);
                finalPrice = price + (price * 0.25);
                console.log(finalPrice.toFixed(2));

            } else if (grade === 'negative') {
                price = ((tripDays * 35.00) * 0.85);
                finalPrice = price * 0.90;
                console.log(finalPrice.toFixed(2));
            }

        } else if (tripDays > 15) {

            if (grade === 'positive') {
                price = ((tripDays * 35.00) * 0.80);
                finalPrice = price + (price * 0.25);
                console.log(finalPrice.toFixed(2));

            } else if (grade === 'negative') {
                price = ((tripDays * 35.00) * 0.80);
                finalPrice = price * 0.90;
                console.log(finalPrice.toFixed(2));
            }
        }
    }
}

skiTrip('30', 'president apartment', 'negative');