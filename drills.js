const Array = require('./array');

function main() {
  // Create an instance of the Array class
  let arr = new Array();
  Array.SIZE_RATIO = 3;

  // Add an item to the array
  arr.push(3); // Array { length: 1, _capacity: 3, ptr: 0 }
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10); // Array { length: 6, _capacity: 12, ptr: 3 }
  console.log(arr, 'after pushing six values into the array');
  //the length is six because we added six items to the array. The capacity is 12
  // but we think that the capacity should be 18, not sure why the ratio is not being
  // set. We played with the instanciation of 'Array.SIZE_RATIO = 3' and that may be
  // where the issue is.
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr, 'after using pop 3 times');
  // After using pop three times, the array has kept its original capacity but has
  // decreases its length by three. This means that the memory that was originally allocated
  // has not changed.
  console.log(
    arr.get(0),
    'pulling out the first item in the array with the .get() method'
  );
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');
  console.log(arr, 'popped all items out and added Tauhida');
  // the result was 'Array { length: 1, _capacity: 12, ptr: 3 }'.
  // this shows us that the array has kept its original memory allocation and that
  // the item 'tauhida' is the only item.
  //_resize() is used to allocate memory so that data can be stored
}
main();

function spaceString(str) {
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === ' ') {
  //       str[i] = '%20';
  //     }
  //   }
  //   return str;
  return str.replace(' ', '%20');
}

console.log(spaceString('www.thinkful.com /tauh ida parv een'));
