
let fullName = document.getElementById("fullName");

let randomNum = () => {
    return Math.floor(Math.random() * 256);
};

let changeColor = () => {

    let rundomBackgrColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    let rundomTextColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

    fullName.style.backgroundColor = rundomBackgrColor;
    fullName.style.color = rundomTextColor;

};

fullName.addEventListener("click", changeColor );