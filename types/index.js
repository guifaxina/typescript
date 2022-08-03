var number1 = document.getElementById("1");
var number2 = document.getElementById("2");
var button = document.getElementById("sum");
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(sum(Number(number1.value), Number(number2.value)));
});
