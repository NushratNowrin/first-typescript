{
	// Basic Data Type
	// Primitive
	// 1. number
	let num: number = 2;

	// 2. string
	let name: string = "Nushrat Jahan";

	// 3. boolean
	let isStudent: boolean = true;

	// 4. null
	let nothing: null = null;

	// 5. undefined
	let notDefine: undefined = undefined;

	// Non-Primitive
	// 1. Array
	let friends: string[] = ["Nowrin", "Asha", "Tania", "Juthy"];
	let age: number[] = [25, 25, 24, 25];

	// 2. tuple
	let marks: [string, number, boolean] = ["Physics", 88, true];

	// 3. Object
	const user: {
		readonly name: string; // access modifier
		age?: number; // Optional type
		institution: "Islamic University"; // Literal types
		isMarried: boolean;
	} = {
		name: "Nushrat",
		institution: "Islamic University",
		isMarried: true,
	};
	// user.name = "Nowrin"; // cannot re-assign readonly
}
