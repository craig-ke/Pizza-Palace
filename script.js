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

$(document). ready( function() {

  $(".bbq_c").on('change',function(){
    inputtedSize = $("#bbq_c-size").val();
    inputtedCrust = $("#bbq_c-crust").val();
    inputtedTopping = $("#bbq_c-toppings").val();
    bbqSteakOrder = new bbqSteak(inputtedSize,inputtedCrust, inputtedTopping);
    pizzaType = bbqSteakOrder.type;
    pizzaDescription = bbqSteakOrder.description();
    $("#bbq_c-price").remove();
    $("#bbq_c-card").append("<div id='bbq_c-price'>" +
        "<p>" + pizzaPriceP() + "</p>" +
        "</div>");
    x = pizzaPriceP();
  })

  $("#btn-bbq_c").click(function () {
    checkoutCount += 1
    sessionStorageValue1.push(x.toString());
    sessionStorage.setItem("bbq_c-price", JSON.stringify(sessionStorageValue1));
    sessionStorageValue2.push(pizzaDescription);
    sessionStorage.setItem("bbq_c-preference", JSON.stringify(sessionStorageValue2));
    $("#Checkout").remove();
    $("#CheckoutItem").append("<a class='nav-link' href='checkout.html' id='Checkout'>Checkout(" + checkoutCount + ")</a>");
   })
   
  });
