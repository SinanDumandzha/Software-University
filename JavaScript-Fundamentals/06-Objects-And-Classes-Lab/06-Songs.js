function songCreator(infoArray) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
    }

    let songs = [];
    let songsCount = infoArray.shift();
    let inPlaylist = infoArray.pop();

    for (let i = 0; i < songsCount; i++) {
        let [typeList, name, time] = infoArray[i].split('_');
        let song = new Song(typeList, name, time);
        songs.push(song);
    }

    if (inPlaylist === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filteredList = songs.filter((i) => i.typeList === inPlaylist);
        filteredList.forEach((i) => console.log(i.name));
    }
}

songCreator([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);