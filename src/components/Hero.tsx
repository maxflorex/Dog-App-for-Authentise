import { useState } from 'react';
import Refresh from './Refresh';
import SearchBreed from './SearchBreed';
import BreedSelection from './SelectBreed';
import SelectedBreed from './SelectedBreed';

type Props = {
    breeds: any;
    dogUrl: any;
};

const Hero = ({ breeds, dogUrl }: Props) => {
    const [newBreed, setNewBreed] = useState('');

    return (
        <div className="flex justify-center items-center p-16 md:p-24 z-50">
            <div className="flex flex-col justify-center items-center gap-8 mx-auto w-auto">
                {newBreed === '' ? (
                    <>
                        {!dogUrl ? (
                            <button className="btn btn-square loading" />
                        ) : (
                            <img
                                src={dogUrl}
                                alt="Dog"
                                className="rounded-md w-auto h-full max-h-[50vh] object-cover"
                            />
                        )}
                    </>
                ) : (
                    <SelectedBreed newBreed={newBreed} />
                )}
                <div className="flex gap-4 items-center text-teal-900">
                    <BreedSelection breeds={breeds} setNewBreed={setNewBreed} />
                    <h1>or</h1>
                    <SearchBreed breeds={breeds} setNewBreed={setNewBreed} />
                    <h1>|</h1>
                    <Refresh setNewBreed={setNewBreed} />
                </div>
                {newBreed !== '' && (
                    <h1 className="font-semibold text-3xl text-teal-500">
                        - {newBreed} -
                    </h1>
                )}
            </div>
        </div>
    );
};

export default Hero;
