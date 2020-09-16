function checkSpeed(info) {
    let speed = Number(info[0]);
    let area = info[1];

    switch (area) {
        case 'motorway':
            if ((speed > 130) && (speed <= 130 + 20)) {
                console.log('speeding');
            } else if ((speed > 130) && (speed <= 130 + 40)) {
                console.log('excessive speeding');
            } else if ((speed > 130) && (speed > 130 + 40)) {
                console.log('reckless driving');
            }
            break;

        case 'interstate':
            if ((speed > 90) && (speed <= 90 + 20)) {
                console.log('speeding');
            } else if ((speed > 90) && (speed <= 90 + 40)) {
                console.log('excessive speeding');
            } else if ((speed > 90) && (speed > 90 + 40)) {
                console.log('reckless driving');
            }
            break;

        case 'city':
            if ((speed > 50) && (speed <= 50 + 20)) {
                console.log('speeding');
            } else if ((speed > 50) && (speed <= 50 + 40)) {
                console.log('excessive speeding');
            } else if ((speed > 50) && (speed > 50 + 40)) {
                console.log('reckless driving');
            }
            break;

        case 'residential':
            if ((speed > 20) && (speed <= 20 + 20)) {
                console.log('speeding');
            } else if ((speed > 20) && (speed <= 20 + 40)) {
                console.log('excessive speeding');
            } else if ((speed > 20) && (speed > 20 + 40)) {
                console.log('reckless driving');
            }
            break;
    }
}

checkSpeed([120, 'interstate']);