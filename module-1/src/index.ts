{
	const course: string = "Next level web development";
	// console.log(course);

	// Basic Data Type
	// -----------------------------------------------------------------------
	// String
	// Implicit Data Type
	let firstName = "Nushrat";

	// Explicit Data Type
	let firstName2: string = "Nushrat";

	// Number
	let roll: number = 1718048;

	// Boolean
	let isGraduated: boolean = true;

	// null
	let nothing: null = null;

	// undefined
	let bolahoyni: undefined = undefined;

	// any
	let d;

	d = 1;
	d = "abc";
	d = true;
	d = undefined;
	d = null;

	// console.log(d);

	// Array
	let friends: string[] = ["Hasib", "Hasan"];
	let rolls: number[] = [1, 3];

	// Tuple
	let ageName: [number, string, boolean] = [20, "Mr. X", true];

	// Object
	const user: {
		company: "Programming Hero"; //Literal Types. The value act as a type, and can't be changed
		firstName: string;
		middleName: string;
		lastName?: string; //optional type: string | undefined
		readonly Husband: string; // Access Modifier. Husband can't be changed
	} = {
		company: "Programming Hero",
		firstName: "Nushrat",
		middleName: "Jahan",
		Husband: "Hasan Ali",
	};

	// Function
	// Normal Function
	function add(num1: number, num2: number): number {
		return num1 + num2;
	}
	const addNumber = add(3, 3);
    // console.log(addNumber);

    // Arrow Function
    const addArrow = (num1:number, num2: number): number => num1 + num2;
    addArrow(2, 3);

}

// Object
const poorUser = {
	name: "Nushrat",
	balance: 100,
	addBalance(num: number): string{
		return `My current balance is ${this.balance + num}`
	},
};
const total = poorUser.addBalance(2000)

// console.log(total);

// Map
const arr: number[] = [1, 2, 3];
const newArr: number[] = arr.map((x:number):number => x*x)
// console.log(newArr);

// Spread Operator
const vowel1: string[] = ['a', 'e', 'i'];
const vowel2: string[] = ['o', 'u'];


const vowel = [...vowel1, ...vowel2]
console.log(vowel);


// ts-node-dev --respawn --transpile-only .\module-1\src\index.ts
