interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string, area: number} {
    return {
        color: config.color,
        area: Math.pow(config.width, 2)
    }
}

let mySquare = createSquare({ colour: "red", width: 10 })
console.log(mySquare)