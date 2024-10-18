function first_task(){
    var name = prompt("What is your name?");
    name = name.toLowerCase();
    name = name.substring(0,1).toUpperCase() + name.substring(1);
    alert("Hello " + name);
}

function second_task(){
    var weight = parseInt(prompt("What is your weight (kg)?"));
    var height = parseInt(prompt("What is your height (m)?"));
    var bmi = weight/(height*height);

    if(bmi < 18.5){
        alert("You are underweight");
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        alert("You are normal");
    }
    else if(bmi >= 25 && bmi <= 29.9){
        alert("You are overweight");
    }
}

function third_task(){
    var number = parseInt(prompt("Enter a number"));
    var fibonacci = [0,1];

    if (number < 0) {
        alert("Enter a positive number");
    }
    else if (number == 0) {
        alert("0");
    }
    else if (number == 1) {
        alert("0, 1");
    }
    else {
        for (var i = 2; i < number; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
        alert(fibonacci);
    }
}