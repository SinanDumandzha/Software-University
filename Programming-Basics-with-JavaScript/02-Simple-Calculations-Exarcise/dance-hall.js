function danceHall (hallLenght, hallWidght, wardrobeLenght) {
    hallLenght = Number(hallLenght);
    hallWidght = Number(hallWidght);
    wardrobeLenght = Number(wardrobeLenght);

    let hallSize = (hallLenght * 100) * (hallWidght * 100);
    let wardrobeArea = (wardrobeLenght * 100) * (wardrobeLenght * 100);
    let hallSpace = hallSize - wardrobeArea - (hallSize / 10);
    let spaceForDancers = hallSpace / 7040;

    console.log (Math.floor(spaceForDancers));
}

danceHall('50','25','2');