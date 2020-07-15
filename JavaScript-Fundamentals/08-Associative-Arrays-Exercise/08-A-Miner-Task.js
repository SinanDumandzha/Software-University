function printMinerTask(input) {
    let resources = {};

    while (true) {
        if (input.length === 0) {
            break;
        }

        let material = input.shift();
        let value = Number(input.shift());

        resources.hasOwnProperty(material)
            ? (resources[material] += value)
            : (resources[material] = value);
    }

    for (let [material, value] of Object.entries(resources)) {
        console.log(`${material} -> ${value}`);
    }
}

printMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
