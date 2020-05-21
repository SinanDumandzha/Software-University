function hotel(month, nights) {

    night = Number(nights);

    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === 'May' || month === 'October') {
        studioPrice = nights * 50;
        apartmentPrice = nights * 65;

        if (night > 14) {
            studioPrice *= 0.70;
            apartmentPrice *= 0.90;

        } else if (night > 7) {
            studioPrice *= 0.95;
        } 
        console.log (`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log (`Studio: ${studioPrice.toFixed(2)} lv.`);
    }

    if (month === 'June' || month === 'September') {
        studioPrice = nights * 75.20;
        apartmentPrice = nights * 68.70;

        if (night > 14) {
            studioPrice *= 0.80;
            apartmentPrice *= 0.90;
        }
        console.log (`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log (`Studio: ${studioPrice.toFixed(2)} lv.`);
    }

    if (month === 'July' || month === 'August') {
        studioPrice = nights * 76;
        apartmentPrice = nights * 77;

        if (night > 14) {
            apartmentPrice *= 0.90;
        }
        console.log (`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log (`Studio: ${studioPrice.toFixed(2)} lv.`);
    }
}

hotel ('June', '16');