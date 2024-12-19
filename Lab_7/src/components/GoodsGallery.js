import React from "react";
import GoodsCard from "./GoodsCard";

const products = [
    { id: 1, name: "Яблуко", price: "$1", image: "/Image/apple.jpg" },
    { id: 2, name: "Памело", price: "$2", image: "/Image/pomelo.jpg" },
    { id: 3, name: "Слива", price: "$3", image: "/Image/plum.jpg" },
    { id: 4, name: "Груша", price: "$1.5", image: "/Image/pear.jpg" },
    { id: 5, name: "Апельсин", price: "$2.5", image: "/Image/orange.jpg" }
];

function GoodsGallery() {
    return (
        <section>
            <h3>Галерея товарів</h3>
            <div className="goods-gallery">
                {products.map((product) => (
                    <GoodsCard
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </section>
    );
}

export default GoodsGallery;
