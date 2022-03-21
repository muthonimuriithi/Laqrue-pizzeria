$(document).ready(function(){

    $("table").hide();
    $(".high").hide();
    $(".high1").hide();
    $(".yes").hide();
    $(".no").hide();
    $(".high1 h4").hide();
    
    $(".order").click(function(e) {
      var sizeOfPizza = $(".size option:selected").val();
      var pizzaToppings = $(".toppings option:selected").val();
      var pizzaCrust = $(".crust option:selected").val();
      var total= parseInt(sizeOfPizza) + parseInt(pizzaToppings) + parseInt(pizzaCrust); 
      var order = 1;
      var maxTotal = 0;

      e.preventDefault()
  
    
      
  
      $("table").show();
      $(".high").show();
      $(".order").hide();
      
})
$("#sizes").html($(".size option:selected").text() + " - " + sizeOfPIzza);
$("#topping").html($(".toppings option:selected").text() + " - " + pizzaToppings);
$("#crusts").html($(".crust option:selected").text() + " - " + pizzaCrust);
$("#total").html(total);

function myPizza(size, toppings, crust, total, orderNo) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.total = total;
  this.orderNo = orderNo;
}


$('.butt').click(function() {
  var sizeOfPizza = $(".size option:selected").val();
  var pizzaToppings= $(".toppings option:selected").val();
  var pizzaCrust = $(".crust option:selected").val();
  var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
  order = order + 1;
  maxTotal = maxTotal + total;


  var newPizza = new myPizza(sizeOfPizza, pizzaToppings, pizzaCrust, total, order);

  var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

  $("#pizza").append(newRow);
});
})
