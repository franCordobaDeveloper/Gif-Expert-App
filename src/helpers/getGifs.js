export const getGifs = async ( category ) => {

    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=NI80wFPLW1OSRdjFsTszGY6aHdSY4lee&q=${category}&limit=10`;
        const resp = await fetch( url );

        if(!resp.ok) throw new Error("Error al hacer la peticion a la api.");

        const { data } = await resp.json();

        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
        
        return gifs;
    } catch (error) {
        console.error('Error: ', error.message);
        throw error;
    }
   
}