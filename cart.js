//Get inputs
var fruits = [];
var item = "";

while ((fruits.length < 5) && (item != 'done')) {

//while (item != "done") {
    item = prompt('Add an item')
    //if ((item != null) && (item != "")) {
        fruits.push(item);
} 
fruits.pop();
console.log('> fruits: ', fruits);