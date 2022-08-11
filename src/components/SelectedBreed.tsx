import axios from 'axios';
import React, { useMemo, useState } from 'react';

type Props = {
    newBreed: any;
};

const SelectedBreed = ({ newBreed }: Props) => {
    const [newUrl, setNewUrl]: any = useState('');

    // FETCH SELECTED BREEDS
    useMemo(() => {
        axios
            .get(`https://dog.ceo/api/breed/${newBreed}/images/random`)
            .then((response) => {
                if (response.data) {
                    setNewUrl(response.data);
                } else {
                    return null;
                }
            });
    }, [newBreed]);

    return (
        <>
            {!newUrl ? (
                <button className="btn btn-square loading" />
            ) : (
                <img
                    src={newUrl.message}
                    alt="Dog"
                    className="rounded-md w-auto h-full max-h-[50vh] object-cover"
                />
            )}
        </>
    );
};

export default SelectedBreed;
