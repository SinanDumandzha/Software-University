function solve(input) {
    let widthOfFreeSpace = Number(input.shift());
    let lengthOfFreeSpace = Number(input.shift());
    let hightOfFreeSpace = Number(input.shift());
    let packageSize = input.shift();

    let freeSpace = widthOfFreeSpace * lengthOfFreeSpace * hightOfFreeSpace;
    let totalPackageSize = 0;
    let isFull = false;

    while (packageSize !== 'Done') {
        totalPackageSize += Number(packageSize);

        if (totalPackageSize >= freeSpace) {
            isFull = true;
            break;
        }
        packageSize = input.shift();
    }
    if (isFull) {
        let neededSpace = totalPackageSize - freeSpace;
        console.log(`No more free space! You need ${neededSpace} Cubic meters more.`);
    } else {
        let spaceLeft = freeSpace - totalPackageSize;
        console.log(`${spaceLeft} Cubic meters left.`);
    }
}

solve([10, 10, 2, 20, 20, 20, 20, 122]);