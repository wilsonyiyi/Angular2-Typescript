// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
// }

// function createSquare(config: SquareConfig): {color: string, area: number} {
//     return {
//         color: config.color,
//         area: Math.pow(config.width, 2)
//     }
// }

// let mySquare = createSquare({ colour: "red", width: 10 })
// console.log(mySquare)


// 函数类型接口
// interface SearchFunc {
//     (source: string, subSearch: string): boolean;
// }

// let mySearch: SearchFunc;

// mySearch = function (src: string, subSearch: string):boolean {
//     let result = src.search(subSearch);
//     return result > -1
// }


// 继承接口
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "red";
square.sideLength = 10;
// square.width = 10;
console.log(square)