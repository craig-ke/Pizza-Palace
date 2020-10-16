var inputtedSize;
var inputtedTopping;
var inputtedCrust;
var pizzaPrice;
var pizzaType;
var pizzaDescription;
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

//Chicken Tika
//Boerewors
//Margheritta
//Meatzza
