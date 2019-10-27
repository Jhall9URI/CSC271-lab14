var unpopped = document.forms["popcorn"]["unpopped"];
var caramel = document.forms["popcorn"]["caramel"];
var caramelNut = document.forms["popcorn"]["caramelNut"];
var toffey = document.forms["popcorn"]["toffey"];

var subtotal = 0.0;
var TAX_RATE = 0.07;

function updateSubtotal()
{
    //reset subtotal everytime you update
    subtotal = 0.0;

    subtotal += unpopped.value*3.00;
    subtotal += caramel.value*3.50;
    subtotal += caramelNut.value*4.50;
    subtotal += toffey.value*5.00;

    var subtotalBox = document.getElementById("subtotal");
    subtotalBox.value = "$" + subtotal;

    //whenever you update the subtotal, update the grand total too
    getGrandTotal();
}

function getGrandTotal()
{
    var grandTotal = document.getElementById("grand-total");

    //get the checked radio button from the group
    var payment = document.querySelector('input[name="paymentMethod"]:checked');

    //if "check" is selected, then add a fee, if something else (or nothing) is selected, no fee.
    var fee = (payment && payment.value === "check" ? 2.50 : 0.00);

    //update the grandtotal's box
    grandTotal.value = "$" + (subtotal + subtotal*TAX_RATE + fee);
}