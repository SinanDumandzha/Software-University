function printTownsToJSON(input) {
    let data = input.slice();
    let towns = data.slice(1);
    let townsInfo = [];
    let regex = /\s*\|\s*/;

    for (let townInfo of towns) {
        let info = townInfo.split(regex).filter((info) => info !== "");
        let town = {
            Town: info[0],
            Latitude: Number(Number(info[1]).toFixed(2)),
            Longitude: Number(Number(info[2]).toFixed(2))
        };
        townsInfo.push(town);
    }

    console.log(JSON.stringify(townsInfo));
}

printTownsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);