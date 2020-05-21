function record (recordTime, lenght, secondsPerM) {

    recordTime = Number (recordTime);
    lenght = Number (lenght);
    secondsPerM = Number (secondsPerM);

    let swimmingTime = (lenght * secondsPerM);
    let delayTime = Math.floor(lenght / 15) * 12.5;
    let totalSwimmingTime = swimmingTime + delayTime;
    
    if (recordTime <= totalSwimmingTime) {
        let secondsSlow = totalSwimmingTime - recordTime  ;
        console.log (`No, he failed! He was ${secondsSlow.toFixed(2)} seconds slower.`);
    } else {
        console.log (`Yes, he succeeded! The new world record is ${totalSwimmingTime.toFixed(2)} seconds.`);
    }
}

record ("55555.67", "3017", "5.03");