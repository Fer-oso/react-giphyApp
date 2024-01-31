import { useEffect, useState } from 'react'
import { findAll } from '../dao/GyphyFetch';

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);

    const [isLoading, setIsLoading] = useState(false)

    const findAllGifs = async () => {

        const gifsResult = await findAll(category, 10);

        setGifs(gifsResult);

        if (gifs.length > 0 ) {
            setIsLoading(true)
        }
    }

    useEffect(() => {
        findAllGifs()
    }, [category,gifs])

    return {
        gifs,
        isLoading
    }

}
