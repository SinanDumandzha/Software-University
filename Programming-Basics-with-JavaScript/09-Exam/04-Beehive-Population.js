function solve(populationInput, yearsInput) {
    let population = Number(populationInput);
    let years = Number(yearsInput);

    let finalPopulation = 0;
    let newBees = 0;
    let deathBees = 0;
    let migrantBees = 0;

    for (let i = 1; i <= years; i++) {
        newBees = Math.floor(population / 10) * 2;
        population += newBees;

        if (i % 5 == 0) {
            migrantBees = Math.floor(population / 50) * 5;
            population -= migrantBees;
        }

        deathBees = Math.floor(population / 20) * 2;
        population -= deathBees;
    }
    console.log(`Beehive population: ${population}`);
}

solve('100', '6');