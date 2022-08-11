import { useState } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { AppContext } from './context/appContext';
import useDogBreeds from './hooks/useDogBreeds';
import useGetImage from './hooks/useGetImage';

function App() {
    // GET BREED LIST
    const { list, error, loading } = useDogBreeds();

    // GET DOG IMAGE
    const { dogUrl, fetchData } = useGetImage();

    return (
        <>
            <AppContext.Provider value={{ fetchData }}>
                <Navbar />
                <div className="h-full z-50">
                    <Hero breeds={list} dogUrl={dogUrl} />
                </div>
                <Footer />
            </AppContext.Provider>
        </>
    );
}

export default App;
