// * link Javascript to HTML file 
// * Input the field to receive the numbers entered 
// * User should click the button to receive the answer
// * Plug users input Fahrenheit into the formula 
//  (number − 32) × 5/9 = 0°C
// * Return the correct results
// * Update celsius text

function calcCelsius() {
    var valueToConvert= document.getElementById("input-value").value;
    var answer = (valueToConvert -32) *  5/9;
    document.getElementById("answer").innerHTML=answer;
    
}
  