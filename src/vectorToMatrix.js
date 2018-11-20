export default function(vector){
	let matrix = [
		vector.slice(0, 3),
		vector.slice(3, 6),
		vector.slice(6, 9)
	];

	return matrix;
}