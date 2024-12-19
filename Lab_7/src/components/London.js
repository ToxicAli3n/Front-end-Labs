import React, { useState } from "react";

function London() {
    const [isImageVisible, setIsImageVisible] = useState(true);
    const [imageSize, setImageSize] = useState({ width: 1000, height: 650 });

    const handleIncrease = () => {
        setImageSize({
            width: imageSize.width * 1.1,
            height: imageSize.height * 1.1
        });
    };

    const handleReduce = () => {
        setImageSize({
            width: imageSize.width / 1.1,
            height: imageSize.height / 1.1
        });
    };

    const handleToggleImage = () => {
        setIsImageVisible(!isImageVisible);
    };

    return (
        <section>
            <h3>Лондон</h3>
            <p><b>Ло́ндон</b> (<i>англ. London, МФА: [ˈlʌndən]</i>) — столиця Англії та Сполученого Королівства,
                розташована на річці Темза.
                Одне з найбільших міст Європи. Площа 1572 км²; у 2021 році населення становило 8 799 728 містян, а з
                передмістями близько 10 млн.</p>

            <p>
                <b>Лондон у XVI—XVIII століттях</b>
                <br/>
                З приходом до влади Тюдорів в Королівстві Англія почалася епоха абсолютної монархії. Централізація влади
                в руках короля призвела до того, що столиця
                стала розвиватися і багатіти ще швидше, чим раніше. Сприятливо позначилися на місті часи правління
                Генріха VIII та Едуарда VI — були засновані
                знамениті лондонські парки Гайд-парк і Кенсінгтон-гарден і відкрито кілька великих лікарень.
            </p>

            <p>
                <b>Лондон у XIX столітті</b>
                <br/>
                Лондон XIX сторіччя — місто контрастів. З одного боку, він був столицею найбільшої держави у світі —
                Британській імперії, економічним і політичним центром
                світу, а з іншої — містом, де в халупах, практично без засобів для існування, жили мільйони бідняків.
            </p>

            <p>
                <b>Лондон у XX столітті</b>
                <br/>
                Перша світова війна на якийсь час припинила розвиток Лондона. Місто вперше зазнало авіанальотів. У
                період між двома світовими війнами
                Лондон продовжував збільшуватися, але більше за площею, а не за населенням.
            </p>

            <p>
                <b>Лондон у XXI столітті</b>
                <br/>
                Нове тисячоліття Лондон зустрів відкриттям кількох нових споруд, таких як Купол міленіуму (Millennium
                Dome) і Лондонське око (London Eye),
                колесо огляду, що стало новим символом міста.
            </p>
            {isImageVisible && (
                <img
                    src="/Image/London.jpg"
                    width={imageSize.width}
                    height={imageSize.height}
                />
            )}
            <div className="buttSection">
                <button className="btn" onClick={handleToggleImage}>
                    {isImageVisible ? "Видалити" : "Додати"}
                </button>
                <button className="btn" onClick={handleIncrease}>Збільшити</button>
                <button className="btn" onClick={handleReduce}>Зменшити</button>
            </div>
        </section>
    );
}

export default London;
