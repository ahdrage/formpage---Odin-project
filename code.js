function add(...nums) {
    return (nums.reduce((sum, num) => sum + num, 0))
}

function subtract(a, ...nums) {
    return (a - nums.reduce((sum, num) => sum + num, 0))
}

function multiply(...nums) {
    return (nums.reduce((sum, num) => sum * num, 1))
}

function divide(...nums) {
    return ((nums.reduce((sum, num) => sum / num)))
}


function operate(operator, num1, num2) {
    if (operator === "+") {
        let sum = add(num1, num2);
        return sum;
    }
}

const oneClicked = document.getElementById("one");
const twoClicked = document.getElementById("two");

let storedNumber = "";


let operateTest = operate("+", 1, 2);




let allDivs = container.children;




let number1 = "";

/* document.body.addEventListener("keypress", function onEvent(event) {
    if (event.key === "1") {
        document.getElementById("display").innerText = "1";
        storedNumber = "1"; 
        console.log(storedNumber);
    }
    
}); */



// Using two different arrays to make calculation easier
let arrayForDisplay = [];
let arrayForCalc = [];

let numberEntered = "";
let stringForDisplay = "";
let stringForCalc = "";
let num1 = "";


// Looping through all divs and adding listener to change display when a button is clicked
for (const div of allDivs) {
    div.addEventListener("click", function () {
        // Showing more than one digit at a time in display

        
        if (div.className === "number") {
            console.log("success");
            numberEntered = div.innerText;
            arrayForDisplay.push(numberEntered);
            arrayForCalc.push(numberEntered);

            stringForDisplay = arrayForDisplay.join('');
            stringForCalc = arrayForCalc.join('');

            document.getElementById("lower").innerText = stringForDisplay;

        }


        if (div.className === "operator") {
            
            document.getElementById("upper").innerText = stringForDisplay;

            stringForDisplay = arrayForDisplay.join('');
            num1 = parseInt(stringForDisplay);
            


           /*  arrayForDisplay.pop();
            
            
            document.getElementById("lower").innerText = "+  "; */
        }



        function reverseString(string) {
            let array = []
            let reversedArray = []
            let newArray = []
            for (char of string) {
                array.push(char)
            }

            while (array.length > 0) {
                reversedArray.push(array.pop()) 
            }

            newArray = reversedArray.join('')
            console.log(newArray);



            
            
         
            
        }

        reverseString("what")


        /* 
        
        Har først en event-listener. Den sjekker om noen av knappene blir trykket på. 
        Hvis en blir trykket på så lagres det i "numberEntered". 
        Trykker man flere tall så lagres det i et array. 
        
        Hvis man trykker på + så lagres tallet man har trykket inn i "num1". 
        Når man så trykker på et nytt tall så skal det lagres i en ny variabel når = trykkes på.  
        
        
        
        While a certain value is true keep adding numbers to the array. 
        
        
        
        */







        /*  if (numberEntered === "=") {
             let sums = add(num1, num2); 
             console.log(sums);

         } */


        /*  arrayForDisplay = []; 
         arrayForDisplay.push(numberEntered); 
         stringForDisplay = arrayForDisplay.join(''); 
         document.getElementById("lower").innerText = stringForDisplay;
         console.log(stringForDisplay); */











    });
}

// make two arrays


  // While a specific button is not clicked the new value should be added to the array. 


