// calculator

// function & operations

// key pad-click input
$(".btn").click(function () {
    let buttonId = $(this).attr("id");
    btn_animation(buttonId);
    console.log($(this).attr("id"));
    switch (buttonId) {
        case "btn-1":
            $(".display-section-3").text($(".display-section-3").text() + "1");
            break;

        case "btn-2":
            $(".display-section-3").text($(".display-section-3").text() + "2");
            break;

        case "btn-3":
            $(".display-section-3").text($(".display-section-3").text() + "3");
            break;
        case "btn-4":
            $(".display-section-3").text($(".display-section-3").text() + "4");
            break;
        case "btn-5":
            $(".display-section-3").text($(".display-section-3").text() + "5");
            break;
        case "btn-6":
            $(".display-section-3").text($(".display-section-3").text() + "6");
            break;
        case "btn-7":
            $(".display-section-3").text($(".display-section-3").text() + "7");
            break;
        case "btn-8":
            $(".display-section-3").text($(".display-section-3").text() + "8");
            break;
        case "btn-9":
            $(".display-section-3").text($(".display-section-3").text() + "9");
            break;

        case "btn-0":
            $(".display-section-3").text($(".display-section-3").text() + "0");
            break;

        case "btn-backspace":
            $(".display-section-3").text($(".display-section-3").text().slice(0, $(".display-section-3").text().length - 1));
            break;
        case "btn-add":
            $(".display-section-3").text($(".display-section-3").text() + "+");
            break;
        case "btn-sub":
            $(".display-section-3").text($(".display-section-3").text() + "-");
            break;
        case "btn-multiply":
            $(".display-section-3").text($(".display-section-3").text() + "×");
            break;
        case "btn-divide":
            $(".display-section-3").text($(".display-section-3").text() + "÷");
            break;
        case "btn-dot":
            $(".display-section-3").text($(".display-section-3").text() + ".");
            break;
        case "btn-AC":
            allClear();
            break;
        // case "btn-sqrt":
        //     $(".display-section-3").text($(".display-section-3").text() + `sqrt(${})`);
        //     break;
        case "btn-result":
            let inputValue = $(".display-section-3").text();
            result(inputValue);

    }
})


// result
function result(inputValue) {
    // check for error
    console.log(inputValue);
    checkError(inputValue);
    inputValue = inputValue.replaceAll('×', '*').replaceAll('÷', '/');
    console.log(inputValue);
    let result = eval(inputValue);
    console.log(result);
    // display-section-2
    $(".display-section-1").text(inputValue.replaceAll('*', '×').replaceAll('/', '÷'));
    $(".display-section-2").text("= " + result);
    $(".display-section-3").text(result);


}
// keyborad event
$(document).keydown(function (event) {
    let key = event.key;
    console.log(key);
    switch (key) {
        case "1":
            $(".display-section-3").text($(".display-section-3").text() + "1");
            break;

        case "2":
            $(".display-section-3").text($(".display-section-3").text() + "2");
            break;

        case "3":
            $(".display-section-3").text($(".display-section-3").text() + "3");
            break;
        case "4":
            $(".display-section-3").text($(".display-section-3").text() + "4");
            break;
        case "5":
            $(".display-section-3").text($(".display-section-3").text() + "5");
            break;
        case "6":
            $(".display-section-3").text($(".display-section-3").text() + "6");
            break;
        case "7":
            $(".display-section-3").text($(".display-section-3").text() + "7");
            break;
        case "8":
            $(".display-section-3").text($(".display-section-3").text() + "8");
            break;
        case "9":
            $(".display-section-3").text($(".display-section-3").text() + "9");
            break;

        case "0":
            $(".display-section-3").text($(".display-section-3").text() + "0");
            break;

        case "Backspace":
            $(".display-section-3").text($(".display-section-3").text().slice(0, $(".display-section-3").text().length - 1));
            break;
        case "+":
            $(".display-section-3").text($(".display-section-3").text() + "+");
            break;
        case "-":
            $(".display-section-3").text($(".display-section-3").text() + "-");
            break;
        case "*":
            $(".display-section-3").text($(".display-section-3").text() + "×");
            break;
        case "/":
            $(".display-section-3").text($(".display-section-3").text() + "÷");
            break;
        case ".":
            $(".display-section-3").text($(".display-section-3").text() + ".");
            break;
        case "Enter":
            let inputValue = $(".display-section-3").text();
            result(inputValue);
    }
});

// All clear
function allClear() {
    $(".display-section-1").text("0");
    $(".display-section-2").text("0");
    $(".display-section-3").text("0");

}


// btn animation
function btn_animation(currentBtnId) {
    $(`#${currentBtnId}`).addClass("pressed");
    setTimeout(function () {
        $(".btn").removeClass("pressed");
    }, 125)
}



// error on the basis of length
function checkError(inputValueStr) {
    let inputValueArray = [];
    console.log(inputValueStr);
    console.log(inputValueStr.length);
    // check for numeric value
    for (let i = 0; i < inputValueStr.length; i++) {
        if (!isNaN((inputValueStr[i]))) {
            console.log(`${inputValueStr[i]} is a number`);
            if (!isNaN(inputValueStr[i - 1])) {
                inputValueArray[inputValueArray.length - 1] = inputValueStr[i - 1] + inputValueStr[i];
                continue;
            }
            inputValueArray.push(inputValueStr[i]);


            // toGetFullNumber
        } else {
            console.log(`${inputValueStr[i]} is  a operator`);
            inputValueArray.push(inputValueStr[i]);
        }
    }
    if (!inputValueArray.length % 2) {
        console.log("envalid inout!");
        $(".display-section-3").text("Invalid !");
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





