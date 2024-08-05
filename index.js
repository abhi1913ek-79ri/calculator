// calculator

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
function calculator(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case "add":
            result = add(num1, num2);
            break;
        case "sub":
            result = sub(num1, num2);
            break;
        case "multiply":
            result = multiply(num1, num2);
            break;
        case "divide":
            result = divide(num1, num2);
            break;
    }
    return result
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
    $(".display-input").css("width", (`${(lengthOfDisplayInput + 1) * 0.57}em`));
    if (Event.key === "Backspace") {
        $(".display-input").css("width", (`${(lengthOfDisplayInput) * 0.57}em`));
    }
}

// key pad-click input
$(".btn").click(function () {
    let lengthOfDisplayInput = 0;
    console.log($(this).attr("id"));
    let buttonId = $(this).attr("id");
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
            $(".display-input").val($(".display-input").val()[0]);
            lengthOfDisplayInput = $(".display-input").val().length;
            resizer(lengthOfDisplayInput);
            break;
    }
})







