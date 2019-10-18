let arr = [2, 5, 1, 3, 1, NaN, 2, 1, undefined, 11, 7, 7, 6];

let max = -Infinity;
let min = Infinity;

function arrayMaxMin(array){
	for (let i = 0; i < array.length; i++) {
		if(+array[i] > max){
			max = +array[i];
		}
		if(+array[i] < min){
			min = +array[i];
		}
	}
}

function swap(array, min, max){
	let i = array.indexOf(min);
	let j = array.indexOf(max);
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

function arraySum(array){
	let sum = 0;
	for (var i = 0; i < array.length; i++) {
		if(isNaN(array[i])){
			sum+=0;
		} else {
			sum += array[i];
		}
	}
	return sum;
}

function addResultToObject(arrayMax, arrayMin, arraySum){
	let arrayInfo = {
		arrayMax,
		arrayMin,
		arraySum,
	};
	return arrayInfo;
}

arrayMaxMin(arr);
swap(arr, min, max);
let sum = arraySum(arr);
let arrayInfo = addResultToObject(max, min, sum);
