const boxCounter = document.querySelector(".box-counter");
const buttons = document.querySelectorAll(".box-btn");

let counter = 0;

buttons.forEach(item => {
    item.addEventListener('click', e => {
        switch(e.target.dataset.button) {
            case "decrease":
                counter--;
            break;
            case "reset":
                counter = 0;
            break;
            case "increase":
                counter++;
            break; 
        }

        boxCounter.innerHTML = `${counter}`;
    })
})