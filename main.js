// code goes here :)

//1. What is the average price of all items?///
function ans1 () {
var listOfPrices = items.map(function(element,idx,arr){
  return element.price
});

var sum = 0;
listOfPrices.forEach(function(element,idx,arr) {
  sum = sum + element;
});

var avg = sum/listOfPrices.length
}

//2. Show me an array of items that cost between $14.00 and $18.00 USD?

// document.getElementsByClassName('answer2')
function ans2 () {

var price14to18 = items.filter(function(element,idx,arr) {
  return element.price >= 14.00 && element.price <= 18.00 && element.currency_code === "USD"
}).map(function (element,idx,arr) {
  return element.title
});

}
//3. Which item has a "GBP" currency code? Display it's name and price.

function ans3 () {
var gbpCurrency = items.filter(function(element,idx,arr) {
  return element.currency_code === "GBP"
}).map (function(element,idx,arr) {
  return element.title + " " + element.price
});

}
//4. Display a list of all items who are made of wood.

function ans4 {
var listOfItems = items.filter(function(element,idx,arr) {
  return element.materials.indexOf("wood") !==-1
}).map(function(element,idx,arr) {
 return element.title
});

}


//5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

function ans5 {

var eightMaterials = items.filter(function(element,idx,arr) {
  return element.materials <= 8
}).map (function (element,idx,arr) {
  return element.quantity + element.materials + element.title
});

}

//6. How many items were made by their sellers?

function ans6 {
var homeMade = items.filter(function(element,idx,arr){
  return element.who_made === "i_did"
});
homeMade.length

}
