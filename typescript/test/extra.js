function createSquare(config) {
    return {
        color: config.color,
        area: Math.pow(config.width, 2)
    };
}
var mySquare = createSquare({ colour: "red", width: 10 });
console.log(mySquare);
