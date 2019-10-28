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
    
    payByCheck = document.getElementById("check");

    //if "check" is selected, then add a fee, if something else (or nothing) is selected, no fee.
    var fee = (payByCheck.checked ? 0.00 : 2.50);

    //update the grandtotal's box
    grandTotal.value = "$" + (subtotal + subtotal*TAX_RATE + fee);
}

function popcornconfirm() {

    payByCheck = document.getElementById("check");
    if (!payByCheck.checked)
    {
        var confirmation= confirm("There is a $2.50 fee for credits cards. Are you okay with this subcharge?");

        if (!confirmation)
        {
            payByCheck.checked = true;
            getGrandTotal();
            return false
        }
    }

    return true;
}
