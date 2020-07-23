function matchFullNames(text) {
    let pattern = /(?<name>\b[A-Z][a-z]+[ ][A-Z][a-z]+\b)/g;

    let validNames = [];
    let validName = null;

    while ((validName = pattern.exec(text)) !== null) {
        validNames.push(validName.groups.name);
    }
    console.log(validNames.join(" "));
}

matchFullNames(
    "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov"
);
