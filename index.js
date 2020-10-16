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

var bbqCPreferences = [];
var bbqCPrices = [];
var bbqSPreferences = [];
var bbqSPrices = [];

sessionStorageValue1 = [];
sessionStorageValue2 = [];
sessionStorageValue3 = [];
sessionStorageValue4 = [];
sessionStorageValue5 = [];
sessionStorageValue6 = [];
sessionStorageValue7 = [];
sessionStorageValue8 = [];
sessionStorageValue9 = [];
sessionStorageValue10 = [];
sessionStorageValue11 = [];
sessionStorageValue12 = [];

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
//Pizza pricing.
var pizzaTypeP=function(){
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
var pizzaTypeP=function(){
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

//addition payment based on crust
var pizzaTypeP=function(){
  var pizzaCrustPrice;
  if (inputtedCrust=="Classic"){
    pizzaSizePrice=10;
  }else if (inputtedCrust=="Crispy"){
    pizzaSizePrice=15;
  }else if (inputtedCrust=="Cheesy Crst"){
    pizzaSizePrice=20;
  }else if (inputtedCrust=="Glutton Free Base"){
     pizzaSizePrice=25;
  }
}