// calculator

// array


// function()

function add(num1, num2) {
    return num1 + num2
}
function sub(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}



// click-input-display
$(".display-input").click(function () {
    $(this).addClass("active");
})


// input resizer
$(".display-input").keydown(function (Event) {
    console.log(`${Event.key} is pressed`)
    $(".display-input").animate("focus")
    console.log($(".display-input").val().length);
    let lengthOfDisplayInput = $(".display-input").val().length;
    // here i taken extra space for diplay the entered out come
    $(".display-input").css("width", (`${(lengthOfDisplayInput + 1) * 0.57}em`));
    if (Event.key === "Backspace") {
        $(".display-input").css("width", (`${(lengthOfDisplayInput) * 0.57}em`));
    }
});

// resizer fuction
function resizer(lengthOfDisplayInput) {
    // here i taken extra space for diplay the entered out come
    if (lengthOfDisplayInput <= 17) {
        $(".display-input").css("width", (`${(lengthOfDisplayInput) * 0.57}em`));
    } else if (lengthOfDisplayInput < 30) {
        // reduce font size
        $(".display-input").css("font-size", (`${(1.5)}em`));
        $(".display-input").css("width", (`${(lengthOfDisplayInput) * 0.57}em`));
    }

    // $(".display-input").css("max-width", (`${17 * 0.57}em`));
    if (Event.key === "Backspace") {
        if (lengthOfDisplayInput <= 17) {
            $(".display-input").css("font-size", (`${(2.25)}em`));
            $(".display-input").css("width", (`${(lengthOfDisplayInput) * 0.57}em`));

        }

    }
}

// key pad-click input
$(".btn").click(function () {
    let buttonId = $(this).attr("id");
    btn_animation(buttonId);
    let lengthOfDisplayInput = 0;
    console.log($(this).attr("id"));
    switch (buttonId) {
        case "btn-1":
            $(".display-input").val($(".display-input").val() + "1");
            lengthOfDisplayInput = $(".display-input").val().length;
            resizer(lengthOfDisplayInput);
            break;
        case "btn-2":
            $(".display-input").val($(".display-input").val() + "2");
            lengthOfDisplayInput = $(".display-input").val().length;

            resizer(lengthOfDisplayInput);
            break;
        case "btn-3":
            $(".display-input").val($(".display-input").val() + "3");
            lengthOfDisplayInput = $(".display-input").val().length;

            resizer(lengthOfDisplayInput);
            break;
        case "btn-4":
            $(".display-input").val($(".display-input").val() + "4");
            lengthOfDisplayInput = $(".display-input").val().length;

            resizer(lengthOfDisplayInput);
            break;
        case "btn-5":
            $(".display-input").val($(".display-input").val() + "5");
            lengthOfDisplayInput = $(".display-input").val().length;

            resizer(lengthOfDisplayInput);
            break;
        case "btn-6":
            $(".display-input").val($(".display-input").val() + "6");
            lengthOfDisplayInput = $(".display-input").val().length;

            resizer(lengthOfDisplayInput);
            break;
        case "btn-7":
            $(".display-input").val($(".display-input").val() + "7");
            lengthOfDisplayInput = $(".display-input").val().length;

            resizer(lengthOfDisplayInput);
            break;
        case "btn-8":
            $(".display-input").val($(".display-input").val() + "8");
            lengthOfDisplayInput = $(".display-input").val().length;

            resizer(lengthOfDisplayInput);
            break;
        case "btn-9":
            $(".display-input").val($(".display-input").val() + "9");
            lengthOfDisplayInput = $(".display-input").val().length;
            resizer(lengthOfDisplayInput);
            break;

        case "btn-0":
            $(".display-input").val($(".display-input").val() + "0");
            lengthOfDisplayInput = $(".display-input").val().length;
            resizer(lengthOfDisplayInput);
            break;

        case "btn-backspace":
            $(".display-input").val($(".display-input").val().slice(0, $(".display-input").val().length - 1));
            lengthOfDisplayInput = $(".display-input").val().length;
            resizer(lengthOfDisplayInput);
            break;
        case "btn-add":
            $(".display-input").val($(".display-input").val() + "+");
            lengthOfDisplayInput = $(".display-input").val().length;
            resizer(lengthOfDisplayInput);
            break;
        case "btn-sub":
            $(".display-input").val($(".display-input").val() + "-");
            lengthOfDisplayInput = $(".display-input").val().length;
            resizer(lengthOfDisplayInput);
            break;
        case "btn-multiply":
            $(".display-input").val($(".display-input").val() + "×");
            lengthOfDisplayInput = $(".display-input").val().length;
            resizer(lengthOfDisplayInput);
            break;
        case "btn-divide":
            $(".display-input").val($(".display-input").val() + "÷");
            lengthOfDisplayInput = $(".display-input").val().length;
            resizer(lengthOfDisplayInput);
            break;
        case "btn-result":
            let inputValueStr = $(".display-input").val();
            let inputValueArray=[];
            console.log("sumbit");
            let operatorArray = [];
            let operatorIndexArray = [];
            let numberArray = [];

            result(numberArray,operatorIndexArray, operatorArray,inputValueStr,inputValueArray);
            console.log(operatorArray);
            console.log(operatorIndexArray);
            console.log(numberArray);
            calculator(numberArray,operatorIndexArray, operatorArray,inputValueStr,inputValueArray);
            break;
    }
})

// btn animation
function btn_animation(currentBtnId) {
    $(`#${currentBtnId}`).addClass("pressed");
    setTimeout(function () {
        $(".btn").removeClass("pressed");
    }, 125)
}


// input value seperation
function result(numberArray,operatorIndexArray, operatorArray,inputValueStr,inputValueArray) {
    console.log(inputValueStr);
    console.log(inputValueStr.length);
    // check for numeric value
    for (let i = 0; i < inputValueStr.length; i++) {
        if (!isNaN((inputValueStr[i]))) {
            console.log(`${inputValueStr[i]} is a number`);
            if (!isNaN(inputValueStr[i-1])) {
                numberArray[numberArray.length-1]=inputValueStr[i - 1] + inputValueStr[i];
                inputValueArray[inputValueArray.length-1]=inputValueStr[i - 1] + inputValueStr[i];
                continue;
            }
            numberArray.push(inputValueStr[i]);
            inputValueArray.push(inputValueStr[i]);


            // toGetFullNumber
        } else {
            console.log(`${inputValueStr[i]} is  a operator`);
            operatorArray.push(inputValueStr[i]);
            operatorIndexArray.push(i);
            inputValueArray.push(inputValueStr[i]);
        }
    }

}

function calculator(numberArray,operatorIndexArray, operatorArray,inputValueStr,inputValueArray) {
    let divideIndexArray=[];
    let multiplyIndexArray=[];
    let addIndexArray=[];
    let subIndexArray=[];
    console.log("inside calculation function");
    if(operatorArray.includes("÷")){
        for(let i=0;i<operatorArray.length;i++){
            if(operatorArray[i]==="÷"){
                divideIndexArray.push(operatorIndexArray[i]);
            }
        }
    }
    if(operatorArray.includes("×")){
        for(let i=0;i<operatorArray.length;i++){
            if(operatorArray[i]==="×"){
                multiplyIndexArray.push(operatorIndexArray[i]);
            }
        }
    }
    if(operatorArray.includes("+")){
        for(let i=0;i<operatorArray.length;i++){
            if(operatorArray[i]==="+"){
                addIndexArray.push(operatorIndexArray[i]);
            }
        }
    }
    if(operatorArray.includes("-")){
        for(let i=0;i<operatorArray.length;i++){
            if(operatorArray[i]==="-"){
                subIndexArray.push(operatorIndexArray[i]);
            }
        }
    }
    // wait for other operator.........................................................

    console.log(divideIndexArray);
    console.log(multiplyIndexArray);
    console.log(addIndexArray);
    console.log(subIndexArray);
    console.log(inputValueArray);

    // go to calculation side
    if(divideIndexArray.length!=0){
        for(index of divideIndexArray){

        }
    }
}































// function calculator(num1, num2, operator) {
//     let result = 0;
//     switch (operator) {
//         case "add":
//             result = add(num1, num2);
//             break;
//         case "sub":
//             result = sub(num1, num2);
//             break;
//         case "multiply":
//             result = multiply(num1, num2);
//             break;
//         case "divide":
//             result = divide(num1, num2);
//             break;
//     }
//     return result
// }





