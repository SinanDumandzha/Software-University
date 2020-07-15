function findOddTimeSWords(input) {
    let words = input.split(" ").map((element) => element.toLowerCase());
    let map = createMap(new Set(words));

    words.forEach((element) => {
        map.set(element, map.get(element) + 1);
    });

    let result = "";

    Array.from(map.entries()).forEach((kvpArray) => {
        let [key, value] = kvpArray;

        if (Number(value) % 2 !== 0) {
            result += key + " ";
        }
    });

    console.log(result);

    function createMap(set) {
        let map = new Map();
        set.forEach((element) => {
            map.set(element, 0);
        });

        return map;
    }
}

findOddTimeSWords("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
