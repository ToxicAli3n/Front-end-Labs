import React from "react";

const Controls = ({ onClick }) => (
    <div className="buttSection">
        <button onClick={() => onClick("add")}>Додати</button>
        <button onClick={() => onClick("increase")}>Збільшити</button>
        <button onClick={() => onClick("reduce")}>Зменшити</button>
        <button onClick={() => onClick("delete")}>Видалити</button>
    </div>
);

export default Controls;
