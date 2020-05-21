function projects (architectsName, projectsCount) {
    let projects = Number(projectsCount);
    let projectsTime = 3 * projectsCount;

    console.log (`The architect ${architectsName} will need ${projectsTime} hours to complete ${projectsCount} project/s.`)
}

projects('Sinan', '4');