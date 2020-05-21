function solve(input) {
    let record = Number(input.shift());
    let distance = Number(input.shift());
    let timePerMeter = Number(input.shift());

    let totalTimeWithoutDelay = distance * timePerMeter;
    let delay = (Math.floor(distance / 50)) * 30;
    let totalTime = totalTimeWithoutDelay + delay;

    if (totalTime < record) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let timeDifference = totalTime - record;
        console.log(`No! He was ${timeDifference.toFixed(2)} seconds slower.`);
    }
}

solve(['10164', '1400', '25']);