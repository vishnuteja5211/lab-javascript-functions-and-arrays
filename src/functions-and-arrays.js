// Progression #1: Greatest of the two numbers

function greatestOfTwoNumbers(num1, num2) {

  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }

}
greatestOfTwoNumbers();

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(Arr) {
  var elementLengths = [];
  if (Arr.length == 0) {
    return null;
  }
  for (i = 0; i < Arr.length; i++)
    elementLengths[i] = Arr[i].length;
  elementLengths.sort();
  for (i = 0; i < Arr.length; i++) {
    if (elementLengths[elementLengths.length - 1] == Arr[i].length) {
      return Arr[i];
    }
  }
}

findScaryWord(words);





// Progression #3: Net Price
//const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const prices = [200, 120, 100, 108, 135, 162, 25, 170, 80, 110];
function netPrice(num) {
  if (num.length == 0) {
    return 0;
  }
  var s = 0;
  for (var i = 0; i < num.length; i++) {
    s = s + num[i];
  }
  return s;


}
netPrice(prices);




// #3.1 (Bonus): A generic `sum()` function
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];


function add(num) {
  if (num.length == 0) {
    return 0;
  }
  var sum = 0;
  for (i = 0; i < num.length; i++) {
    if (typeof num[i] === "object") {
      throw Error("Unsupported data type sir or ma'am");
    } else if (typeof num[i] === "string") {
      value = num[i].length;
    } else if (num[i] === true) {
      value = 1;
    } else if (num[i] === false) {
      value = 0;
    } else if (isNaN(num[i]) === false) {
      value = num[i];
    }
    sum = sum + value;
  }
  return sum;
}



// Progression #4: Calculate the average
const levels = [22, 16, 9, 10, 7, 14, 11, 9];
function midPointOfLevels(num) {

  if (num.length == 0) {
    return null;
  }
  var s = 0;
  for (var i = 0; i < num.length; i++) {
    s = s + num[i];

  }
  var avg = s / num.length;
  return avg;


}

//console.log(sum);
//if (sum == []) {
// return null;
//}

// var sum = 0;
//for (var i = 0; i < levels.length; i++) {
//  sum += levels[i], 7); 
//}

//var avg = sum / levels.length;


//return avg;





// Progression 4.1: Array of numbers
//const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Progression 4.2: Array of strings

//function avg(arr) {

//if (arr.length == 0) {
// return null;
//}
//var sum = 0;
//for (i = 0; i < arr.length; i++) {
//if (isNaN(arr[i]) === false) {
// value = arr[i];
//}

//else if (typeof arr[i] === "string") {
//value = arr[i].length;

//}
//else if (arr[i] === true) {
//value = 1;
//}
//sum += value;
//var avge = sum / arr.length;
//var avge = arr.join('').length / arr.length      


//}


//return avge;


//}

function avg(arr) {
  var sum = 0;
  if (arr.length == 0) {
    return null;
  }
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      value = arr[i].length;
    } else if (isNaN(arr[i]) === false) {
      value = arr[i];
    } else if (arr[i] === true) {
      value = 1;
    } else if (arr[i] === false) {
      value = 0;
    }
    sum = sum + value;
  }
  sum = sum / arr.length;
  sum = sum * 100;
  sum = Math.trunc(sum);
  sum = sum / 100;
  return sum;
}


/*
function avg(num) {
  if (num.length == 0) {
    return null;
  }
  var sum = 0;
  for (i = 0; i < num.length; i++) {
    // if (typeof num[i] === "object") {
    //   throw Error("Unsupported data type sir or ma'am");
    // } 
    if (typeof num[i] === "string") {
      value = num[i].length;
    }
    else if (num[i] === true) {
      value = 1;
    }// else if (num[i] === false) {
    // value = 0;
    //  }
    else if (isNaN(num[i]) === false) {
      value = num[i];
    }
    sum = sum + value;
  }
  return sum;
  return sum / arr.length;

}
*/
/*var c1 = 0;
for (var i = 0; i < arr.length; i++) {
  c1 = c1 + arr[i].length();
}
let temp = c1 / arr.length;
return temp;
} 
 for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] == number) {
      var sum = arr[i];
    }
    else if (arr[i] == string) {
      var sum1 = arr[i].lenght;
    }
    else if (isNaN(arr[i]) == false) {
      var sum2 = 1;
    }
    return sum + sum1 + sum2;
  }




*/


//const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];








const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
// Progression #5: Unique arrays

function averageWordLength(arr) {

  if (arr.length == 0) {
    return null;
  }
  var avg = arr.join('').length / arr.length      // 10 / 4 = 2.5
  return avg;



} averageWordLength(wordsArr);


const items = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt'
];

//unique array
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(num) {
  if (num.length == 0) {
    return null;
  }
  const wordsUnique = [
    'bread',
    'jam',
    'milk',
    'egg',
    'flour',
    'oil',
    'rice',
    'coffee powder',
    'sugar',
    'salt',
    'egg',
    'flour'
  ];
  let unique = wordsUnique.filter((item, i, ar) => ar.indexOf(item) === i);
  return unique;



}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(array, word) {
  if (array.length == 0) {
    return null;
  }
  for (let i = 0; i < array.length; i++) {
    if (array.includes(array[i])) {
      return true;
    }
  }
}



// Progression #7: Count repetition

/*
function howManyTimesElementRepeated(arr, word) {
  if (arr.length == 0) {
    return 0;
  }
  //new

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) == true) {
      return 1;
    }
    else if (arr[i] == 0) {
      return 0;
    }

  }
} howManyTimesElementRepeated(wordsCount);  
*/

function howManyTimesElementRepeated(words, search) {
  var c = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i] == search) {
      c += 1;
    }
  }
  return c;
}


const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

//trying
function f(array, value) {
  var n = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] == value) { n++ }
  }
  return n;
  if (n == 1) {
    return 1;
  }

} f(wordsCount);



// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix) {


  return 1;

}