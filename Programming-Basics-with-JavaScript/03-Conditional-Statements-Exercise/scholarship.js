function scholarship(earning, success, minSalary) {

    earning = Number(earning);
    success = Number(success);
    minSalary = Number(minSalary);

    let excellentScholarship = 0;
    let socialScholarship = 0;

    if (success >= 5.50) {
        excellentScholarship = success * 25;

        if (earning < minSalary) {
            socialScholarship = minSalary * 0.35;
        }

        if (excellentScholarship > socialScholarship) {
            console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);

        } else {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
        }

    } else if (success > 4.50) {

        if (earning < minSalary) {
            socialScholarship = minSalary * 0.35;
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);

        } else {
            console.log("You cannot get a scholarship!");
        }

    } else {
        console.log("You cannot get a scholarship!");
    }
}

scholarship("330.00", "5.50", "320.00");