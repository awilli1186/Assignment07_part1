var anOne = document.getElementById('answer1');
var anTwo = document.getElementById('answer2');
var anThree = document.getElementById('answer3');
var anFour = document.getElementById('answer4');
var anFive = document.getElementById('answer5');
var anSix = document.getElementById('answer6');

function getAvg(items){
   var prices = items.map(function(item){
     return item.price;
   });

   var sum = prices.reduce(function(total, val){
     return total + val;
   });

   return sum / items.length;
};

anOne.innerHTML = ('The average price is $' + getAvg(items).toFixed(2));

var priceRange = items.filter(function(item){
  return (item.price > 14 && item.price < 18);
}).map(function(price) {
  return price.title;
});

anTwo.innerHTML = priceRange;

var currencyCode = items.map(function(item){
    if (item.currency_code === "GBP"){
    return item.title;
  };
});
 anThree.innerHTML = currencyCode;
