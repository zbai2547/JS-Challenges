// STEP 1  ---------------------------------------------------------------------------
// Write 4 functions - 1 for each mathematical operators on the calculator
// Each function should accept two input parameters:
// - firstInput
// - secondInput

// Each function should return the value of the appropriate 
// calculation for the mathematical operator
// -----------------------------------------------------------------------------------

function add(firstInput, secondInput){
    return firstInput + secondInput;
}

function substract(firstInput, secondInput){
    return firstInput - secondInput;
}

function multiply(firstInput, secondInput){
    return firstInput * secondInput;
}

function divide(firstInput, secondInput){
    return firstInput / secondInput;
}

// STEP 2  ---------------------------------------------------------------------------
// Write a function called calculate()
// calculate() should accept three input parameters:
// - firstInput
// - secondInput
// - operator

// Inside the calculate() function, write a switch case statement
// Switch case should use operator as the switch parameter
// Include a case for each of the mathematical operators
// Inside each case, call the appropriate mathematical function from step 1
// Return the value of this function, using firstInput and secondInput as parameters
// -----------------------------------------------------------------------------------

function calculate(firstInput, secondInput, operator){
    
    var result = 0;
    switch(operator){ 
        case "+":{    
            result = add(firstInput, secondInput);
         }break; 
        case "-":{ 
            result = substract(firstInput, secondInput);
         }break; 
        case "*":{ 
            result = multiply(firstInput, secondInput);
         }break; 
        case "/":{  
            result = divide(firstInput, secondInput);
         }break; 
        }    
    
    return result;
}