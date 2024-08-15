let choice = Number(prompt("Welcome to Conversion. Which of the following will you like to convert? \n1. Celcius to Farenheit. \n2.Kilogram to gram \n3. Farenheit to Celcius." ))
 
switch(choice){
    case 1:
    alert("You chose option 1 and wants to convert from Celcius to Farenheit")
    let amount = Number(prompt("Please enter your number"))
    let celciustofarenheit = ((amount *9/5) + 32).toFixed(2)
    alert(amount + "celcius is" +  celciustofarenheit + "Farenheit")
    break;

    case 2:
        alert("You chose option 2 and wants to convert from Kilogram to gram")
        let number = Number(prompt("Please enter your number"))
        let kilogramtogram = (number * 1000).toFixed(2)
        alert(number + "Kg is" +  kilogramtogram + "grams")
       break;

   case 3:
    alert("You chose option 3 and wants to convert from Farenheit to Celcius")
    let value = Number(prompt("Please enter your number"))
    let  Farenheittocelcius= ((value - 32) * 5/9).toFixed(2)
    alert(value + "Farenheitis is" + Farenheittocelcius + "celcius")
    break;

    default:
        alert("you have entered invalid input")      
            break;
}