// Hundo Application

// Enter Values 
// Click a Button 
// Display them

// Get the values from the page
// Start or controller functions
function getValues(){
    // get start value from the page/document
    let startValue = document.getElementById("startValue").value;
    // get end value from the page/document
    let endValue = document.getElementById("endValue").value;
    
    // Must Validate Input
    // parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){

        // call generateNumbers
        numbers = generateNumbers(startValue,endValue);
         // call displayNumbers - not every function has a return statement
        displayNumbers(numbers);

    }else{
        alert("You must enter integers only!");
    }
    
   
}

// Generate numbers from startValue to endValue
// logic function(s)
function generateNumbers(sValue, eValue){

    let numbers = [];

    // first value of array has index of 0
    // numbers = 1,2,3,4,5

    //we want to get all numbers from start to end
    // index = index + 1 same as index++ or i++
    for(let index = sValue; index <= eValue; index++){

        // this will execute in a loop until index = eValue
        numbers.push(index);
    }

    return numbers;

}

// display the numbers and mark the even numbers in bold
// Display or view functions
function displayNumbers(numbers){

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let className = "even";
        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;

}