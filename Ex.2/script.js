let arr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8];

let count = 0;
let max = -Infinity;

function arrayMax(array){
	for (let i = 0; i < array.length; i++) {
		if(+array[i] > max){
			max = +array[i];
		}
	}
}

function amountOfWater(array) {
	let left = 0;
	let right = array.length - 1;
	let leftMax = 0, rightMax = 0;
	while(left < array.indexOf(max)){
		if(array[left] > leftMax){
			leftMax = array[left];
		}
		count += Math.abs(+array[left]- (+leftMax));
		left++;
	}
	while(right > array.indexOf(max)){
		if(array[right] > rightMax){
			rightMax = array[right];
		}
		count += Math.abs(+array[right]- +rightMax);
		right--;
	}
}

arrayMax(arr);
amountOfWater(arr);