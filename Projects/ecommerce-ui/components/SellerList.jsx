import React from "react";
import ProductCard from "./ProductCard";

const SellerList = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-6 p-4">
            <ProductCard
                className="flex flex-col items-center justify-center gap-4 shadow-xl"
                image="https://cdn.achology.com/wp-content/uploads/20240610133614/Thus-Spoke-Zarathustra_-by-Friedrich-Nietzsche-450x686.jpg"
                name="Thus Spoke Zarathustra"
                price="15.56"
                description="“Thus Spoke Zarathustra” is a seminal work by Friedrich Nietzsche, a renowned philosopher of the 19th century. First published between 1883 and 1885, this book presents Nietzsche’s philosophical ideas through the character of Zarathustra, an ancient Persian prophet."
            />

            <ProductCard
                className="flex flex-col items-center justify-center gap-4 shadow-xl"
                image="https://prodimage.images-bn.com/pimages/9780359669189_p0_v2_s600x595.jpg"
                name="Meditations"
                price="10.00"
                description="Meditations is a series of personal reflections by Marcus Aurelius, Roman Emperor 161-180 CE, written over a series of years in far-flung places as he led the Romans in military campaigns, quashed revolts, and dealt with the other tribulations of governing the Empire. "
            />

            <ProductCard
                className="flex flex-col items-center justify-center gap-4 shadow-xl"
                image="https://rochemamabolo.wordpress.com/wp-content/uploads/2019/12/the-republic-90.jpg"
                name="Plato's Republic"
                price="12.00"
                description="The book is a dialogue among the students. The dialogue explores two central questions:

The first question is “what is justice?”  Socrates addresses this question both in terms of political communities and in terms of the individual person or soul."
            />
        </div>
    );
};

export default SellerList;
