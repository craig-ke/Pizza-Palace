//BUSINESS LOGIC
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


//Create Pizza Objects
// Chicken Hawaiin
function chickenHawaiin(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "Chicken Hawaiin";
}

chickenHawaiin.prototype.description = function () {
    return this.type + ", " + this.size + ", " + this.crust + ", " + this.topping;
}

//BBQ Steak 
function bbqSteak(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "BBQ Steak";
}

bbqSteak.prototype.description = function () {
    return this.type + ", " + this.size + ", " + this.crust + ", " + this.topping;
}

//Chicken Tikka 
function chickenTikka(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "Chicken Tikka";
}

chickenTikka.prototype.description = function () {
    return this.type + ", " + this.size + ", " + this.crust + ", " + this.topping;
}

//Boerewors
function boerewors(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "Boerewors";
}

boerewors.prototype.description = function () {
    return this.type + ", " + this.size + ", " + this.crust + ", " + this.topping;
}

//Margherita 
function margherita(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "Margherita";
}

margherita.prototype.description = function () {
    return this.type + ", " + this.size + ", " + this.crust + ", " + this.topping;
}

//Meatzza Pizza
function meatzza(size, crust, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.type = "Meatzza";
}

meatzza.prototype.description = function () {
    return this.type + ", " + this.size + ", " + this.crust + ", " + this.topping;
}


//Default Pizza Price (Small Pizza)
var pizzaTypePriceF = function () {
    var pizzaTypePrice;
    if (pizzaType === "Chicken Hawaiin") {
        pizzaTypePrice = 500;
    } else if (pizzaType === "BBQ Steak") {
        pizzaTypePrice = 600;
    } else if (pizzaType === "Chicken Tikka") {
        pizzaTypePrice = 700;
    } else if (pizzaType === "Boerewors") {
        pizzaTypePrice = 800;
    } else if (pizzaType === "Margherita") {
        pizzaTypePrice = 900;
    } else if (pizzaType === "Meatzza") {
        pizzaTypePrice = 1000;
    }
    return pizzaTypePrice;
}

//Additional Price Based on Size
var pizzaSizePriceF = function () {
    var pizzaSizePrice;
    if (inputtedSize === "Large") {
        pizzaSizePrice = 400;
    } else if (inputtedSize === "Medium") {
        pizzaSizePrice = 200;
    } else if (inputtedSize === "Small") {
        pizzaSizePrice = 0;
    }
    return pizzaSizePrice;
}

//Additional Price Based on Crust
var pizzaCrustPriceF = function () {
    var pizzaCrustPrice;
    if (inputtedCrust == "Classic Crust") {
        pizzaCrustPrice = 5;
    } else if (inputtedCrust === "Thin 'N' Crispy") {
        pizzaCrustPrice = 10;
    } else if (inputtedCrust === "Cheesy Crust") {
        pizzaCrustPrice = 15;
    } else if (inputtedCrust === "Glutten Free Base") {
        pizzaCrustPrice = 20;
    }
    return pizzaCrustPrice;
}


//Additional Price Based on Toppings (Toppings Pricing also relies on Pizza Size)
var pizzaToppingPriceF = function () {
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
var pizzaPriceF = function () {
    pizzaPrice = pizzaSizePriceF() + pizzaToppingPriceF() + pizzaCrustPriceF() + pizzaTypePriceF();
    return pizzaPrice;
}





