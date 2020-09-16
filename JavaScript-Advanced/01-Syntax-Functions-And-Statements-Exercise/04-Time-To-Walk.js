function calculateTimeToWalk(steps, lengthOfFootprint, speedKmH) {
    let stepsCount = Number(steps);
    let footprintM = Number(lengthOfFootprint);
    let speedHour = Number(speedKmH);

    let walkedDistance = stepsCount * footprintM;
    let speedSeconds = speedHour / 3.6;
    let totalTime = walkedDistance / speedSeconds;
    let totalBreakTime = Math.floor(walkedDistance / 500);

    let timeMinutes = Math.floor(totalTime / 60);
    let timeSeconds = Math.round(totalTime - (timeMinutes * 60));
    let timeHours = Math.floor(totalTime / 3600);

    console.log((timeHours < 10 ? "0" : "") + timeHours + ":" + (timeMinutes + totalBreakTime < 10 ? "0" : "") + (timeMinutes + totalBreakTime) + ":" + (timeSeconds < 10 ? "0" : "") + timeSeconds);
}

calculateTimeToWalk(4000, 0.60, 5);