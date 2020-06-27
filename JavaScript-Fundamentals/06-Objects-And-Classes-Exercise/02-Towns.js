function printTownsInfo(input) {
    for (info of input) {
        let townInfo = info.split(' | ');
        let [town, latitude, longitude] = townInfo;

        let townData = {};
        townData.town = town;
        townData.latitude = Number(latitude).toFixed(2);
        townData.longitude = Number(longitude).toFixed(2);

        console.log(townData);
    }
}

printTownsInfo([
    'Sofia | 42.696552 | 23.3260',
    'Beijing | 39.913818 | 116.363625'
]);