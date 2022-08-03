const number1 = document.getElementById("1") as HTMLInputElement;
const number2 = document.getElementById("2") as HTMLInputElement;
const button = document.getElementById("sum")!;

function sum(a: number, b: number) {
  return a + b;
}



button.addEventListener("click", () => {
  console.log(sum(Number(number1.value), Number(number2.value)));
});
