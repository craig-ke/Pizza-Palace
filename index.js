var inputtedSize;
var inputtedTopping;
var inputtedCrust;
var pizzaPrice;
var pizzaType;
var pizzaDescription;
var pizzaCrustPrice
var pizzaSizePrice
var totalPrice = 0;
var checkoutCount = 0;

//chicken Hawaiin
function chickenHawaiin(size,crust,toppings){
  this.size=size;
  this.crust=crust;
  this.toppings=toppings;
  this.type= "Chicken Hawaiin";
}

chickenHawaiin.prototype.description=function(){
  return this.type + "," + this.size + "," + this.crust + "," + this.toppings;
}
//BBQ Steak
function bbqSteak(size,crust,toppings){
  this.size=size;
  this.crust=crust;
  this.toppings=toppings;
  this.type= "BBQ Steak";
}
bbqSteak.prototype.description=function(){
  return this.type + "," + this.size + "," + this.crust + "," + this.toppings;

}
//Chicken Tikka
function chickenTikka(size,crust,toppings){
  this.size=size;
  this.crust=crust;
  this.toppings=toppings;
  this.type="Chicen Tikka";
}
chickenTikka.prototype.description=function(){
  return this.type + "," + this.size + "," + this.crust + "," + this.toppings
}
//Boerewors
function boerewors(size,crust,toppings){
  this.size=size;
  this.crust=crust;
  this.toppings=toppings;
  this.type="Boerewors";
}
boerewors.prototype.description=function(){
  return this.type + "," + this.size + "," + this.crust + "," + this.toppings
}
//Margheritta
function margheritta(size,crust,toppings){
  this.size=size;
  this.crust=crust;
  this.toppings=toppings;
  this.type="Margheritta";
}
margheritta.prototype.description=function(){
  return this.type + "," + this.size + "," + this.crust + "," + this.toppings
}
//Meatzza
function meatzza(size,crust,toppings){
  this.size=size;
  this.crust=crust;
  this.toppings=toppings;
  this.type="Meatzza";
}
meatzza.prototype.description=function(){
  return this.type + "," + this.size + "," + this.crust + "," + this.toppings
}
//Normal Pizza pricing.
var pizzaTypePriceP=function(){
  var pizzaTypePrice;
  if (pizzaType === "Chicken Hawaiin"){
    pizzaTypePrice=500;
  }else if(pizzaType ==="BBQ Steak"){
    pizzaTypePrice=600;
  }else if(pizzaType === "Chicken Tikka"){
    pizzaTypePrice= 700;
  }else if(pizzaType === "Boerewors"){
    pizzaTypePrice= 800;
  }else if(pizzaType === "Margheritta"){
    pizzaTypePrice= 900;
  }else if(pizzaType === "Meatzza"){
    pizzaTypePrice= 1000;
  }
  return pizzaTypePrice
}
//increased size means more money,so
var pizzaSizePriceP=function(){
  var pizzaSizePrice;
  if (inputtedSize==="large"){
    pizzaSizePrice=600;
  }else if(inputtedSize==="medium"){
    pizzaSizePrice=400;
  }else if (inputtedSize==="small"){
    pizzaSizePrice=0
  }
  return pizzaSizePrice
}

//addition payment based on crust.
var pizzaCrustPriceP=function(){
  var pizzaCrustPrice;
  if (inputtedCrust=="Classic"){
    pizzaCrustPrice=10;
  }else if (inputtedCrust=="Crispy"){
    pizzaCrustPrice=15;
  }else if (inputtedCrust=="Cheesy Crest"){
    pizzaCrustPrice=20;
  }else if (inputtedCrust=="Glutton Free Base"){
     pizzaCrustPrice=25;
  }
}

//addition payment based on toppings.
var pizzaToppingPriceP = function () {

  var pizzaToppingPrice;

  if (inputtedSize === "Large" && inputtedTopping === "Pepperoni") {
      pizzaToppingPrice = 40;
  } else if (inputtedSize === "Large" && inputtedTopping === "Mushrooms") {
      pizzaToppingPrice = 50;
  } else if (inputtedSize === "Large" && inputtedTopping === "Onions") {
      pizzaToppingPrice = 60;
  } else if (inputtedSize === "Large" && inputtedTopping === "Extra Cheese") {
      pizzaToppingPrice = 70;
  } else if (inputtedSize === "Medium" && inputtedTopping === "Pepperoni") {
      pizzaToppingPrice = 30;
  } else if (inputtedSize === "Medium" && inputtedTopping === "Mushrooms") {
      pizzaToppingPrice = 40;
  } else if (inputtedSize === "Medium" && inputtedTopping === "Onions") {
      pizzaToppingPrice = 50;
  } else if (inputtedSize === "Medium" && inputtedTopping === "Extra Cheese") {
      pizzaToppingPrice = 60;
  } else if (inputtedSize === "Small" && inputtedTopping === "Pepperoni") {
      pizzaToppingPrice = 20;
  } else if (inputtedSize === "Small" && inputtedTopping === "Mushrooms") {
      pizzaToppingPrice = 30;
  } else if (inputtedSize === "Small" && inputtedTopping === "Onions") {
      pizzaToppingPrice = 40;
  } else if (inputtedSize === "Small" && inputtedTopping === "Extra Cheese") {
      pizzaToppingPrice = 50;
  }
  return pizzaToppingPrice;
}

//Total Price
var pizzaPriceP= function () {
  pizzaPrice = pizzaSizePriceP() + pizzaToppingPriceP() + pizzaCrustPriceP() + pizzaTypePriceP();
  return pizzaPrice;
}
