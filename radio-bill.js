var radioBillAddBtn = document.querySelector('.radioBillAddBtn');
var billItemType = document.querySelector('.billItemTypeRadio');

var callTotalTwoElem = document.querySelector('.callTotalTwo');
var smsTotalTwoElem = document.querySelector('.smsTotalTwo');
var totalTwoElem = document.querySelector('.totalTwo');

var callsTotal = 0;
var smsTotal = 0;


radioBillAddBtn.addEventListener('click', function(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
 
        
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
      
        if (billItemType === "call"){
            callsTotal += 2.75
        }
        else if (billItemType === "sms"){
            smsTotal += 0.75;
        }
        
        //update the totals that is displayed on the screen.
        callTotalTwoElem.innerHTML = callsTotal.toFixed(2);
        smsTotalTwoElem.innerHTML = smsTotal.toFixed(2);
        var totalCost = callsTotal + smsTotal;
        totalTwoElem.innerHTML = totalCost.toFixed(2);
        
        
        if (totalCost >= 50){
            // adding the danger class will make the text red
            totalTwoElem.classList.add("danger");
        }
        else if (totalCost >= 30){
            totalTwoElem.classList.add("warning");
        }
    
});