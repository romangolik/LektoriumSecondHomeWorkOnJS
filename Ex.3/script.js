let price = prompt("Ціна продукта");
let parOfBanknote = prompt("Номінал купюри кою ви оплачуєте");
let stackMoney = [1, 2, 5, 10, 20, 50, 100, 200, 500];
let result = []; //an array to store individual variants
let allVariants = [];  //an array that stores all the options for issuing the remainder
let remainder = price - parOfBanknote;

function getVariants(remainder, i){  //function that fills an array with all variants of an array of intermediate variants
	if(i == undefined){
		i = stackMoney.length-1;
	}
	if(remainder<0 || i < 0){
		return 0;
	}
	if(remainder - stackMoney[i] > 0){
		result.push(stackMoney[i]);
		getVariants(remainder - stackMoney[i], i);
	}
	if(remainder - stackMoney[i] == 0){
		result.push(stackMoney[i]);
		allVariants.push(result);
		result = [];
	}
	return getVariants(remainder, i-1);
}

function checkingAndAddingItems(){    //function that checks if the sum of elements 
	let count = 0; 					  //in the intermediate array is equal to the rest 
	let j;							  //and if it is not then we add missing elements
	
	for (let i = allVariants.length-1; i >=0 ;i--) {
		let number = remainder;
		if(allVariants[i].reduce((a,b) => a+b) < number){
			j = count;
			number -= allVariants[i].reduce((a,b) => a+b);
			while(j >= 0){
				if(number - stackMoney[j] >= 0){
						number -= stackMoney[j];
						allVariants[i].unshift(stackMoney[j]);
				} else{
					j--;
				}
			}
		} else{
			count++;
		}
	}
}

function removeElement(){		//function that checks if the intermediate array has no more than 30 elements, if not, then this intermediate array is deleted
	for (let i = allVariants.length-1; i >= 0 ; i--) {
		if(allVariants[i].length > 30){
			allVariants.splice(i, 1);
		}
	}	
}

getVariants(remainder);
checkingAndAddingItems();
removeElement();