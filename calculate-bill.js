//get a reference to the calculate button
var calculateBtn = document.querySelector('.calculateBtn');
//get a reference to the billTotal element
var billTotalElem = document.querySelector('.billTotal');
//get a reference to the billString
var billString = document.querySelector('.billString');
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
var billTotal = 0;

function totalBill(){
    var billElements = billString.value.split(",");
    billTotal = 0;
    billElements.forEach(function(element){
        var trimmedElement = element.trim();
        if(trimmedElement === "call"){
            billTotal += 2.75
        }
        else if (trimmedElement === "sms"){
            billTotal += 0.75;
        }
    });
    billTotalElem.innerHTML = billTotal.toFixed(2);
}

calculateBtn.addEventListener("click", totalBill);