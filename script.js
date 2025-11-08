const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id== "limpiar") {
            display.innerText= "";
        } else if (item.id== "borrar") {
            let string = display.innerText.toString();
            display.innerText=string.substr(0, string.lenght-1);
        } else if (display.innerText !=""&& item.id=="equal") {
            display.innerText= eval(display.innerText);
        } else if (display.innerText=="" && item.id=="equal") {
            display.innerText="Null";
            setTimeout(()=>(display.innerText=""), 2000);
        } else {
            display.innerText+=item.id;
        }
    };
});

const themeToggleBtn=document.querySelector(".theme-toggler");
const calculator=document.querySelector(".calculator");

let isDark=true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};