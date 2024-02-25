import { useCallback, useEffect, useState } from "react"

export const useFetch = (url) => {

    const [data, setData ] = useState(null)
    const [loading, setLoading ] = useState(true)
    const [error, setError ] = useState(null)

    const fetchData = useCallback(async() => {
        setLoading(true);

        try {
            const res = await fetch(url);

            if(!res.ok) throw Error('error al consumir la API');

            const data = await res.json();

            setData(data);

        } catch(error) {
            setError(error.message);
            setData([]);
        } finally {
            setLoading(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { data, loading, error };
};
//ese es el customHook



// const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')
//asi llamaria/usaria al hook dentro de un componente

// Udemy
// charangonzalo@hotmail.com
// Josefina23230808

//seccion 9