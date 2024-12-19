import React, { useState } from "react";

function Header() {
    const [fullNameStyle, setFullNameStyle] = useState({
        color: "#000",
        backgroundColor: "#fff"
    });

    const [birthStyle, setBirthStyle] = useState({
        color: "#000",
        backgroundColor: "#fff"
    });

    const randomNum = () => Math.floor(Math.random() * 256);

    const changeColor = (setStyle) => {
        const randomBackgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
        const randomTextColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

        setStyle({
            color: randomTextColor,
            backgroundColor: randomBackgroundColor
        });
    };

    return (
        <header>
            <h2
                title="ПІБ студента"
                id="fullName"
                style={fullNameStyle}
                onClick={() => changeColor(setFullNameStyle)}
            >
                Поночовний Антон Євгенійович
            </h2>
            <p
                style={birthStyle}
                onClick={() => changeColor(setBirthStyle)}
            >
                Дата народження: 19.11.2004 Місце народження: м.Київ
            </p>
            <p>Освіта: БНВО "Ліцей-МАН", м.Біла Церква;</p>
            <p>КПІ ім. Ігоря Сікорського, м.Київ</p>
        </header>
    );
}

export default Header;
