function registerAndPrintSystemComponents(input) {
    let systemsList = {};

    input.forEach(systemInfo => {
        let [systemName, componentName, subComponentName] = systemInfo.split(' | ');

        if (!systemsList.hasOwnProperty(systemName)) {
            systemsList[systemName] = {};
        }

        if (!systemsList[systemName].hasOwnProperty(componentName)) {
            systemsList[systemName][componentName] = [subComponentName];
        } else {
            systemsList[systemName][componentName].push(subComponentName);
        }
    });

    let sortedSystems = Object.keys(systemsList).sort((a, b) => Object.keys(systemsList[b]).length - Object.keys(systemsList[a]).length || a.localeCompare(b));

    for (let system of sortedSystems) {
        console.log(system);

        let sortedComponents = Object.keys(systemsList[system]).sort((a, b) => systemsList[system][b].length - systemsList[system][a].length);

        for (let component of sortedComponents) {
            console.log(`|||${component}`);

            for (let subComponent of systemsList[system][component]) {
                console.log(`||||||${subComponent}`);
            }
        }
    }
}

registerAndPrintSystemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);