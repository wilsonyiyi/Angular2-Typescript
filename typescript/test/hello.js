// console.log("12345")
// let arr: number[] = [1,2,4];
// let arr2: Array<number> = [1,23,4];
// enum
// enum Color {Red, Green, Blue};
// let c: Color = Color.Blue;
// console.log(c);
// function error(message: string): never {
// 	throw new Error(message);
// }
// error("出错啦")
// let [first, ...rest] = [1,2,3,4,5]
// console.log(first)
// console.log(rest)
// let obj = {
// 	width: 10,
// 	height: 100,
// 	x: 1,
// 	y: 2
// }
// let { x, y, width, height} = obj;
// console.log(x)
// console.log(y)
// let gift = {
// 	gifts: ["teddy bear", "spiderman", "dinosaur", "Thomas loco", "toy bricks", "Transformers"],
// 	giftPicker: function() {
// 		// let _this = this;
// 		// console.log("this: ", this)
// 		// return function() {
// 		// 	// console.log("inner this : ", this)
// 		// 	let pickedNumber = Math.floor(Math.random() * 6);
// 		// 	return _this.gifts[pickedNumber]
// 		// }
// 		return () => {
// 			let pickedNumber = Math.floor(Math.random() * 6);
// 			return this.gifts[pickedNumber]
// 		}
// 	}
// }
// let pickGift = gift.giftPicker();
// console.log("you get a :", pickGift())
// class Car {
// 	engine: string;
// 	constructor(engine: string) {
// 		this.engine = engine;
// 	}
// 	drive(distanceInMeters: number = 0): void {
// 		console.log(`A car runs ${distanceInMeters}m, powered by ${this.engine}`)
// 	}
// }
// // let car = new Car("petrol");
// // car.drive(1)
// class MotoCar extends Car {
// 	constructor(engine: string) {
// 		super(engine)
// 	}
// }
// class Jeep extends Car {
// 	constructor(engine: string) {
// 		super(engine)
// 	}
// 	drive(distanceInMeters:number = 100) {
// 		console.log("Jeep...")
// 		return super.drive(distanceInMeters)
// 	}
// }
// let tesla = new MotoCar("electricity");
// let landRover: Car = new Jeep("petrol");
// console.log(tesla.engine);
// console.log(tesla.drive(10));
// console.log(landRover.drive())
// 静态属性
// class Grid {
// 	static origin = {x: 0, y: 0};
// 	constructor(public scale: number) {
// 	}
// 	calculateDistanceFromOrigin(point: {x: number, y: number}) {
// 		let xDist = point.x - Grid.origin.x;
// 		let yDist = point.y - Grid.origin.y;
// 		return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
// 	}
// }
// let grid1 = new Grid(1.0);
// let grid2 = new Grid(5.0);
// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}))
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}))
