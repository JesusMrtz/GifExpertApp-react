import { userFetchGifs } from "../hooks/useFetchGifs";
import { GifItemComponent } from "./GifItemComponent";


export function GifGridComponent({ category }) {
    const { images, isLoading } = userFetchGifs(category);

    return(
        <>
            <h1>{ category }</h1>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            
            <div className="card-grid">
                {
                    images.map((image) => (
                        // Aqui estoy esparciendo las properties para no escribir cada una que necesite el componente hijo
                        // <GifItemComponent key={ image.id } {...image} />

                        <GifItemComponent key={ image.id } image={ image } />
                    ))
                }
            </div>
        </>
    );
}