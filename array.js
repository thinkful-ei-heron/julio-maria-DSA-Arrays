
const memory require('./memory')

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }
      //increase the amount of memory which you have reserved so you have space for the 
    //new item, then you are going to need to set the value of the final block to contain the 
    //new value.
    //you set the memory at this.ptr + length to be equal to the value.
    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }
// find the correct memory address by simply adding the index to the start position
//add an index offset, and get the value stored at a memory address. Both are O(1) operations,
// so retrieving values from any point in an array also has best, worst, and average-case 
//performance of O(1).
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
//pop a value from the end of an array is similarly simple. Rather than resize the array,
// you just leave an extra space which will be filled at the next push:
//this is just some pointer arithmetic and memory access it's an O(1) operation.
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    //What about if you want to insert a value into any point in an array, not just the middle? 
    //To do this, you need to shift all of the values after the new value back 1 position. Then
    //you put the new value in its correct place.
    //best case: O(1).. add value to back of array
    //worst case: O(n).. add value to start of array, means shift all values 1 back 
    //avg case: O(n): adding value to the middle .. shifting half of the values 1 space back
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }
//Removing values is very similar to inserting values, except that you are copying the 
//values backward to fill the space where you removed the value rather than forwards to 
//make space for a new value
//best case: O(1) 
//avg case: O(n)
//worst case: O(n)
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}
Array.SIZE_RATIO = 3;


