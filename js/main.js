var anOne = document.getElementById('answer1');
var anTwo = document.getElementById('answer2');
var anThree = document.getElementById('answer3');
var anFour = document.getElementById('answer4');
var anFive = document.getElementById('answer5');
var anSix = document.getElementById('answer6');

// Q1

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

// Q2

var priceRange = items.filter(function(item){
  return (item.price > 14 && item.price < 18);
}).map(function(price) {
  return "<li>" + price.title + "</li>";
}).reduce(function(html, item){
  return html + item;
});


anTwo.innerHTML = priceRange;

// Q3

var currencyCode = items.filter(function(item){
    return item.currency_code === "GBP"
});

anThree.innerHTML = currencyCode[0].title + ' costs &pound' + currencyCode[0].price;

// Q4

var materialType = items.filter(function(item){
  return item.materials.indexOf('wood') != -1;
}).map(function(item){
  return '<li>' + item.title + " " + item.price + '</li>';

}).reduce(function(html, item){
  return html + item;
});

anFour.innerHTML = materialType;

//5

var eight = items.filter(function(item){
    return item.materials.length >= 8;
}).map(function(item){
    var materials = item.materials.map(function(material){
      return '<li>' + material + '</li>';
    }).reduce(function(html, item){
      return html + item;
    });
  return '<li>' + item.title + ' has ' + item.materials.length + ' materials:' + '<ul>' + materials +  '</ul></li>';
}).reduce (function(html, item){
  return html + item;
});

anFive.innerHTML = (eight);

//6

var total = items.filter(function(item){
  return item.who_made === "i_did";
});

anSix.innerHTML = total.length + ' were made by their sellers';
