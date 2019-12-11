/* eslint-disable no-console */
const Array = require('./array');

function main() {
  // Create an instance of the Array class
  Array.SIZE_RATIO = 3;
  let arr = new Array();
  // Add an item to the array
  arr.push(3); // Array { length: 1, _capacity: 3, ptr: 0 }
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10); // Array { length: 6, _capacity: 12, ptr: 3 }
  //console.log(arr, 'after pushing six values into the array');
  //the length is six because we added six items to the array. The capacity is 12
  // but we think that the capacity should be 18, not sure why the ratio is not being
  // set. We played with the instanciation of 'Array.SIZE_RATIO = 3' and that may be
  // where the issue is.
  arr.pop();
  arr.pop();
  arr.pop();
  //console.log(arr, 'after using pop 3 times');
  // After using pop three times, the array has kept its original capacity but has
  // decreases its length by three. This means that the memory that was originally allocated
  // has not changed.
  //console.log(
  //arr.get(0),
  //'pulling out the first item in the array with the .get() method'
  // );
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');
  //console.log(arr, 'popped all items out and added Tauhida');

  // the result was 'Array { length: 1, _capacity: 12, ptr: 3 }'.
  // this shows us that the array has kept its original memory allocation and that
  // the item 'tauhida' is the only item.
  // _resize() is used to allocate memory so that data can be stored
}
main();

function spaceString(str) {
  let conf = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      conf = conf + '%20';
    } else conf = conf + str[i];
  }
  return conf;
}
console.log(spaceString('www.thinkful.com /tauh ida parv een'));

//#6.

function arrFilter(arr, n) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(arrFilter([1, 2, 5, 6, 7], 5));

//#7.
function maxSumInArr(arr) {
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

//#8.

function mergeArr(arrOne, arrTwo) {
  let newarr = [...arrOne, ...arrTwo];
  // console.log(newarr)
  return newarr.sort((a, b) => a - b);
}

console.log(mergeArr([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

//#9.
function arrFilterChar(str, char) {
  let newStr = ``;
  let badChars = [];
  for (let i = 0; i < char.length; i++) {
    badChars = [...badChars, char[i]];
  }
  console.log(badChars);
  for (let i = 0; i < str.length; i++) {
    if (!badChars.includes(str[i])) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}
console.log(arrFilterChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

//#10.
function products(arr) {
  let sum = 1;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    sum = sum * arr[i];
  }
  for (let j = 0; j < arr.length; j++) {
    newArr.push(sum / arr[j]);
  }
  return newArr;
}

console.log(products([1, 3, 9, 4]));

//#11
function twoDArray(arr) {
  const row = []; //x
  const col = []; //y

  for (let i = 0; i < arr.length; i++) {
    //y
    for (let j = 0; j < arr[i].length; j++) {
      //x
      if (arr[i][j] === 0) {
        row.push(j);
        col.push(i);
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (row.includes(i)) {
      arr[i] = [0, 0, 0, 0, 0];
    }

    for (let j = 0; j < arr[i].length; j++) {
      if (col.includes(j)) {
        arr[i][j] = 0;
      }
    }
  }
  return arr;
}
console.log(
  twoDArray([
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);

//#12
// function stringRotation(strOne, strTwo) {
//   for (let i = 0; i < strOne.length; i++) {
//     if (strTwo[i] + strTwo.slice(i + 1) + strTwo.slice(0, i) === strOne)
//       return true;
//   }
//   return false;
// }
// console.log(stringRotation(‘amazon’, ‘azonam’));

function twoDArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        newArr[i] = [0, 0, 0, 0, 0]; ///sets row to five zeros
        newArr.forEach(row => {
          row[j] = 0;
        }); ///sets each column to zero
      }
    }
  }
  return newArr;
}
console.log(
  twoDArray([
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);
