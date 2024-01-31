import { GiphyAppKey } from "../const/keys"

const key = GiphyAppKey;
const urlGiphy = "https://api.giphy.com/v1/gifs/search?api_key=";


export const findAll = async (value,limit) =>{

    const url = urlGiphy+key+"&q="+`${value}`+`&limit=${limit}`;
    
    const response = await fetch(url);
    
    const { data } = await response.json();

    const result = data.map( gif=>({

        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    return result;
}


