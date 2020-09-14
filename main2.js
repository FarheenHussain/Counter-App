var incrementButton = document.querySelector('.increment');
var decrementButton = document.querySelector('.decrement');
var reset = document.querySelector('.reset');

var counter = document.querySelector('.counter');
// incrementButton ka reference dena hai(on the right side of the '='), 
//jiske liye browser suggests a lotta APIs

 

function getCurrentValue()
{
    return counter.textContent;
}

// The above function interacts with DOM API..
//  ..and DOM APIs are all impure calls.
// Henc, the above function is impure.

function setValue(currentValue)   //impure function  
{
    counter.textContent = currentValue;
}


 // impure
incrementButton.addEventListener('click', function(){
    var currentValue = getCurrentValue();       // impure
    currentValue = Number(currentValue) + 1;
    setValue(currentValue);     //impure
});

decrementButton.addEventListener('click', function()
{
    var currentValue = getCurrentValue();
    currentValue = currentValue - 1;
    setValue(currentValue);

    // OR 
    // var currentValue = counter.textContent;
    // currentValue = currentValue - 1;
    // counter.textContent = currentValue;
});

reset.addEventListener('click', function(){
    console.log('Reset');
    setValue(0);
});



