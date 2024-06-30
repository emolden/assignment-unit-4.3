console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Create a global variable named basket and set it to an empty array.

let basket = [];

//Create a function called addItem. It should:
    //take an input parameter for a string item
    //add the new item to the global array basket.
    //return true indicating the item was added
    function isFull() {
        console.log('in isFull');
        let checkLength = (basket.length < 5) ? false: true;
        return checkLength;
        }

function addItem (item) {
    console.log('in addItem', item);
    if (isFull()) {
        console.log('Your basket is full!');
        return false;
    }
    else {
    basket.push(item);
    console.log('item added to basket');
    return true;
    }
}
let one = 'one';
let two = 'two';
let three = 'three';
let four = 'four';
let five = 'five';
let six = 'six';

console.log('Test addItem - should return "true"', addItem(one));
console.log('Test addItem - should return "true"', addItem(two));
console.log('Test addItem - should return "true"',addItem(three));
console.log('Test addItem - should return "true"',addItem(four));
console.log('Test addItem - should return "true"',addItem(five));
console.log('Test addItem - should return "false"',addItem(six));

console.log('basket items', basket);

//Create a function called listItems. It should:
    //loop over the items in the basket array
    //console.log each individual item on a new line

function listItems() {
    console.log('in listItems');
    for (let i = 0; i<basket.length; i++) {
        console.log(basket[i]);
    }
    return basket;
}

console.log('Test - listItems:', listItems());


//Create a function called empty. It should:
    //reset the basket to an empty array
    //do not use basket = [] to reset the array
function empty () {
    console.log('in empty');
        for (let i=0; i<basket.length; i++) {
            basket.shift();
            i--;
        }
    return basket;
}
console.log('Test empty - emptying basket:', empty());

//STRETCH
//1. Add a global const named maxItems and set it to 5.
const maxItems = 5;

//2. Create a function called isFull(). It should:
    //return false if the basket contains less than max number of items
    //return true otherwise (equal or more than maxItems)
/*
function isFull() {
    console.log('in isFull');
    if (basket.length < 5) {
        return false;
    }
    return true;
}

console.log('Test isFull', isFull()); 
*/

//3. Update the required addItem function to:
    //Use the isFull function to prevent more than maxItems from being added to the basket.
    //If an item was added to the array, return true
    //If there was no room and the item could not be added return false


//4. Create a function called removeItem. It should:
    //Take an input parameter for a string item
    //Use Array.indexOf to find the index of the first matching item in the basket.
    //Use Array.splice to remove the first matching item from the basket.
    //Return the item removed or null if the item was not found
basket = [one,two,three,four];

    function removeItem (string) {
        console.log('in removeItem', string);
        if (basket.indexOf(string) >= 0){
            let newBasket = basket.splice(basket.indexOf(string), 1); // outputs the index number of the first item in basket that match string
            console.log(newBasket);
            return newBasket[0];
        }
        else {
            return null;
        }
    }

    console.log('Test removeItem - should return "two"', removeItem('two'));
    console.log('Test removeItem - should return "null"', removeItem('five'));


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
