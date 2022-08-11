import { useState, useMemo } from 'react';
import axios from 'axios';

const useDogBreeds = () => {
    const [list, setList] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get('https://dog.ceo/api/breeds/list/all');
            setList(res.data.message);
            setError(null);
        } catch (error : any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useMemo(() => {
        fetchData();
    }, []);

    return { list, error, loading };
};

export default useDogBreeds;
