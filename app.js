//Set up counter
let count = 0;

//Select Value and Buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener(`click`, function (e) {
        const btnClasses = e.currentTarget.classList;
        if (btnClasses.contains("decrease")){
            count--;
        }
        else if (btnClasses.contains("increase")){
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0){
            value.style.color = "green"
        }
        if(count > 0){
            value.style.color = "green"
        }
        else if(count < 0) {
            value.style.color = "red"
        }
        else {
            value.style.color = "#222"
        }
        value.textContent = count;
    });
});