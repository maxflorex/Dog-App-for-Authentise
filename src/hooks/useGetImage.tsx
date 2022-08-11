import axios from 'axios';
import { useMemo, useState } from 'react';

const useGetImage = () => {
    const [dogUrl, setDogUrl] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
                `https://dog.ceo/api/breed/hound/images/random`
            );
            setDogUrl(res.data.message);
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

    return { dogUrl, error, loading, fetchData };
};

export default useGetImage;
