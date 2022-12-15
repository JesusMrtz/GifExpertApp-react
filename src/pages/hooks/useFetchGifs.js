import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export function userFetchGifs(category) {
    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    async function getImages() {
        const images = await getGifs(category);
        setImages(images);
        setIsLoading(false);
    }
    
    /** 
     * Dispararemos el método de getGifs solamente cuando se renderice el componente por primera vez y esto es gracias a que el segundo argumento del hook tiene "[]"
    **/
    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}