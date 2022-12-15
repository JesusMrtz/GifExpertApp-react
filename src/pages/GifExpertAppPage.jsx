import { useState } from "react";
import { AddCategoryComponent, GifGridComponent } from "./components";

export function GifExpertAppPage() {
    const [ categories, setCategories ] = useState([]);

    function onAddCategory( category ) {
        const existCategory = categories.some( (c) => c.toLowerCase() === category.toLowerCase() );

        if ( existCategory ) return;
        setCategories([category, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategoryComponent  onNewCategory={ onAddCategory } />
            {
                !categories.length && (<strong className="message">Vamos a buscar imagenes 🍔</strong>)
            }
                {/* Vamos a barrer cada unos de los elementos del arreglo */}
                {/* Necesitamos un key cuando construyamos de manera dínamica */}
                {
                    categories.map(( category, index ) => (
                        // No es recomendable utilizar el "index" como key porque react puede confundirse
                        // Este código comentado con el key de index.. me da error
                        // <GifGridComponent key={ category } category={ category } />
                        
                        <GifGridComponent key={ category } category={ category } />
                    ))
                }
        </>
    );
}