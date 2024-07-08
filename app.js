const bmiInterpretations = {
    underweight: {
        range: "Underweight (BMI < 18.5)",
        message: "Your BMI indicates that you are underweight. This could be a sign of malnutrition, underlying health issues, or simply a naturally low weight. It's important to consult with a healthcare provider to ensure you're maintaining a healthy weight and to discuss any potential concerns. Please remember that this result is just a guide and a professional assessment is necessary."
    },
    healthy: {
        range: "Healthy weight (BMI 18.5 - 24.9)",
        message: "Your BMI is within the normal range. This suggests that you have a healthy body weight for your height. Maintaining a balanced diet and regular physical activity is key to staying within this range. Consulting with a healthcare provider can help you continue to maintain your healthy lifestyle. Please remember that this result is just a guide and a professional assessment is necessary."
    },
    overweight: {
        range: "Overweight (BMI 25 - 29.9)",
        message: "Your BMI indicates that you are overweight. Being overweight can increase your risk of developing various health issues such as type 2 diabetes, high blood pressure, and cardiovascular diseases. Consider adopting a healthier diet and increasing your level of physical activity to manage your weight. It's also advisable to consult with a healthcare provider to develop a personalized plan. Please remember that this result is just a guide and a professional assessment is necessary."
    },
    obesity1: {
        range: "Obesity Class I (BMI 30 - 34.9)",
        message: "Your BMI falls into the Obesity Class I category. This classification means you are at a higher risk of serious health problems, including heart disease, diabetes, and metabolic syndrome. It's important to consult with a healthcare provider to create a plan for achieving a healthier weight and to receive personalized advice. Please remember that this result is just a guide and a professional assessment is necessary."
    },
    obesity2: {
        range: "Obesity Class II (BMI 35 - 39.9)",
        message: "Your BMI is classified as Obesity Class II, indicating severe obesity. This significantly increases your risk of chronic diseases and health complications. Seeking guidance from a healthcare professional is strongly recommended to address weight management and overall health. A healthcare provider can help you create a comprehensive and safe weight loss plan. Please remember that this result is just a guide and a professional assessment is necessary."
    },
    obesity3: {
        range: "Obesity Class III (BMI ≥ 40)",
        message: "Your BMI is in the Obesity Class III category, also known as morbid obesity. This is associated with the highest risk of severe health problems, including heart disease, diabetes, and hypertension. Immediate medical attention and a comprehensive weight management plan are essential for improving your health and well-being. Consulting with a healthcare provider is crucial to receive the necessary support and guidance. Please remember that this result is just a guide and a professional assessment is necessary."
    }
};



function calcBMI(){
    let userWeight = parseFloat(document.getElementById("weight").value);
    let userHeight = parseFloat(document.getElementById("height").value);
    return (userWeight/((userHeight / 100) ** 2)).toFixed(2);
}

function modifyText(element, text){
    let htmlElement = document.querySelector(element);
    htmlElement.innerHTML = text;
}


function displayBMI(){

    let bmi = calcBMI();
    let interpretation = "";

    if (bmi < 18.5){
        interpretation = bmiInterpretations.underweight;
    } else if (bmi >= 18.5 && bmi < 24.9){
        interpretation = bmiInterpretations.healthy;
    } else if(bmi >= 25 && bmi <= 29.9){
        interpretation = bmiInterpretations.overweight;        
    } else if (bmi >= 30 && bmi <= 34.9){
        interpretation = bmiInterpretations.obesity1;
    } else if (bmi >= 35 && bmi <= 39.9){
        interpretation = bmiInterpretations.obesity2;
    } else if (bmi >= 40){
        interpretation = bmiInterpretations.obesity3
    }

    modifyText("#bmi", `BMI: ${bmi}`);
    modifyText("#range", interpretation.range);
    modifyText("#interpretation", interpretation.message)

    console.log(`Data: Range = ${interpretation.range} Message = ${interpretation.message}`)
};

