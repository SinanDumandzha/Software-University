function objectFactory(input) {
    return JSON.parse(input).reduce((acc, x) => ({
        ...acc,
        ...x
    }), {});
}

console.log(objectFactory(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`));