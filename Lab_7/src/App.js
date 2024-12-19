import React from "react";
import Header from "./components/Header";
import Hobbies from "./components/Hobbies";
import Movies from "./components/Movies";
import Books from "./components/Books";
import London from "./components/London";
import GoodsGallery from "./components/GoodsGallery";
import "./App.css";


function App() {
    return (
        <div>
            <Header />
            <Hobbies />
            <Movies />
            <Books />
            <London />
            <GoodsGallery />
        </div>
    );
}

export default App;
