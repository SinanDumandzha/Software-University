function sumSeconds (time1, time2, time3) {

    time1 = Number(time1);
    time2 = Number(time2);
    time3 = Number(time3);

    let totalTime = time1 + time2 + time3; 
    let totalMinutes = Math.floor(totalTime / 60);
    let totalSeconds = totalTime % 60;

    if (totalSeconds <= 9) {
        console.log(`${totalMinutes}:0${totalSeconds}`);
        
    } else {
        console.log(`${totalMinutes}:${totalSeconds}`);
        
    }
}

sumSeconds ("20","15","30");