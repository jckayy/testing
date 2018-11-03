

function calculator(num1, operator, num2){

    if (typeof(num1)!="number"||typeof(num2)!="number"){
        console.log("number1 or number2 not number");
        return "number1 or number2 not number!";
    
    }

    else{
        switch(operator){
            case "+":
                console.log(num1+operator+num2+"="+parseInt(num1+num2));
                return parseInt(num1+num2);
                break;
            case "-":
                console.log(num1+operator+num2+"="+parseInt(num1-num2));
                return parseInt(num1-num2);
                break;
            case "*":
                console.log(num1+operator+num2+"="+parseInt(num1*num2));
                return parseInt(num1*num2);
                break;
            case "/":
                console.log(num1+operator+num2+"="+parseInt(num1/num2));
                return parseInt(num1/num2);
                break;
            default:
                console.log("not an valid operator");
                return "not an valid operator";
        }
    }
}




calculators = function (num1, operator, num2){

    if (typeof(num1)!="number"||typeof(num2)!="number"){
        console.log("number1 or number2 not number");
        return "number1 or number2 not number!";
    
    }

    else{
        switch(operator){
            case "+":
                console.log(num1+operator+num2+"="+parseInt(num1+num2));
                return parseInt(num1+num2);
                break;
            case "-":
                console.log(num1+operator+num2+"="+parseInt(num1-num2));
                return parseInt(num1-num2);
                break;
            case "*":
                console.log(num1+operator+num2+"="+parseInt(num1*num2));
                return parseInt(num1*num2);
                break;
            case "/":
                console.log(num1+operator+num2+"="+parseInt(num1/num2));
                return parseInt(num1/num2);
                break;
            default:
                console.log("not an valid operator");
                return "not an valid operator";
        }
    }
}


// if (process.argv[2] == "add"){
//     console.log (parseFloat(process.argv[3])+parseFloat(process.argv[4]));
// }


// else if (process.argv[2] == "substract"){
//     console.log (parseFloat(process.argv[3])-parseFloat(process.argv[4]));
// }

// else if (process.argv[2] == "multiply"){
//     console.log (parseFloat(process.argv[3])*parseFloat(process.argv[4]));
// }

// else if (process.argv[2] == "devide"){
//     console.log (parseFloat(process.argv[3])/parseFloat(process.argv[4]));
// }

// else if (process.argv[2] == "remainder"){
//     console.log (parseFloat(process.argv[3])%parseFloat(process.argv[4]));
// }


// else if (process.argv[2] == "exp"){

//     var x = parseFloat(process.argv[3]);
//     for (var i=1; i<parseFloat(process.argv[4]); i++)
//     {
//         x=x * parseFloat(process.argv[3]);
//     }
//     console.log (x);
// }


// else {
//     console.log ("wrong calculator");

// }