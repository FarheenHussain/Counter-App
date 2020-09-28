var incrementButton = document.querySelector('.increment');
var decrementButton = document.querySelector('.decrement');
var reset = document.querySelector('.reset');

var counter = document.querySelector('.counter');
// incrementButton ka reference dena hai(on the right side of the '='), 
//jiske liye browser suggests a lotta APIs




var state = {
    counter : {
        value : 0
    }
};

function updateCounter()
{
    counter.textContent = state.counter.value;
}


// Since, reset(), increment() & decrement() are helper functions.

var helper = ( function(state)
{
    function reset()
    {
        return {...state.counter, value : 0};
        
    }

    function increment()
    {
        var newCounter = {...state.counter};
        newCounter.value = newCounter.value + 1;
        return newCounter;
    }

    function decrement()
    {
        var newCounter = {...state.counter};
        newCounter.value = newCounter.value - 1;
        return newCounter;
    }


    //return {
    //    reset: reset,
    //    increment: increment,
    //    decrement: decrement
    //};

    // If the key name is the same as value name, 
    // then we can simply write it as this-
    return {
        reset,
        increment,
        decrement
    };

} )(state);




incrementButton.addEventListener('click', function(){
    state.counter = helper.increment();
    updateCounter();
});   
    
   

decrementButton.addEventListener('click', function(){
    state.counter = helper.decrement();
    updateCounter();

})

reset.addEventListener('click', function(){
    state.counter = helper.reset();
    updateCounter();

    //setValue(0);
})







// NOW, increment(), decrement() & reset() HAVE BECOME COMPLETELY PURE FUNCTIONS!


//function getCurrentValue()
//{
//   return counter.textContent;
//}

// The above function interacts with DOM API..
//  ..and DOM APIs are all impure calls.
// Henc, the above function is impure.

//function setValue(currentValue)   //impure function  
//{
//    counter.textContent = currentValue;
//}


 // impure






  //var currentValue = getCurrentValue();       // impure
    //currentValue = Number(currentValue) + 1;
    //setValue(currentValue);     //impure

        //var currentValue = getCurrentValue();
    //currentValue = currentValue - 1;
    //setValue(currentValue);

    // OR 
    // var currentValue = counter.textContent;
    // currentValue = currentValue - 1;
    // counter.textContent = currentValue;

