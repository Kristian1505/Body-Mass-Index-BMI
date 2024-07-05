function calcBMI(){
    let userWeight = parseFloat(document.getElementById("weight").value);
    let userHeight = parseFloat(document.getElementById("height").value);
    return userWeight/((userHeight / 100) ** 2);
}

function modifyText(element, text){
    let htmlElement = document.querySelector(element);
    htmlElement.innerHTML = text;
}

function getBMI(){
    let BMI = calcBMI();
    modifyText("#interpretation", `Your BMI is ${BMI.toFixed(2)}`)
}
