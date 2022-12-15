export async function getGifs(category) {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${ process.env.GIPHY_APY_KEY }&q=${ category }&limit=10`;
        const response = await fetch(url);
        const { data } = await response.json();
        
        return data.map( (image) => {
            return {
                id: image.id,
                title: image.title,
                url: image.images.downsized_medium.url
            }
        });    
    } catch (error) {
        console.error(error);
        return 'Hubo un error en la conexión de la API';   
    }
}
