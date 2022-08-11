import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';

type Props = {
    setNewBreed: any;
};

const Refresh = ({ setNewBreed }: Props) => {
    const { fetchData }: any = useContext(AppContext);

    const handleClick = () => {
        fetchData();
        setNewBreed('');
    };

    return (
        <button className="btn" onClick={handleClick}>
            Random
        </button>
    );
};

export default Refresh;
