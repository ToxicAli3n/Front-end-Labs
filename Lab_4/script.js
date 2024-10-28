let fullName = document.getElementById("fullName");
let birth = document.querySelector("p");

let add = document.getElementById("add");
let increase = document.getElementById("increase");
let reduce = document.getElementById("reduce");
let del = document.getElementById("del");
let londonImage = document.getElementById('londonImage');

let isImageVisible = true;

let randomNum = () => {
    return Math.floor(Math.random() * 256);
};

let changeColor = (element) => {

    let randomBackgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    let randomTextColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

    element.style.backgroundColor = randomBackgroundColor;
    element.style.color = randomTextColor;

};

fullName.addEventListener("click", () => changeColor(fullName) );
birth.addEventListener("click", () => changeColor(birth));

add.addEventListener("click", () => {
    if (!isImageVisible) {
        londonImage.style.display = 'block';
        add.disabled = true;
        isImageVisible = true;
    }
});

increase.addEventListener('click', () => {
    londonImage.style.width = londonImage.offsetWidth * 1.1 + 'px';
    londonImage.style.height = londonImage.offsetHeight * 1.1 + 'px';
});

reduce.addEventListener('click', () => {
    londonImage.style.width = londonImage.offsetWidth / 1.1 + 'px';
    londonImage.style.height = londonImage.offsetHeight / 1.1 + 'px';
});

del.addEventListener("click", () => {
    londonImage.style.display = 'none';
    add.disabled = false;
    isImageVisible = false;
});