type Props = {
    breeds: any;
    setNewBreed: any;
};

const BreedSelection = ({ breeds, setNewBreed }: Props) => {

    // CLIC HANDLER
    const handleClick = (breedSelected: string) => {
        setNewBreed(breedSelected);
    };

    return (
        <div>
            <select
                name=""
                id=""
                className="select select-bordered w-full max-w-xs text-white"
                onChange={(e) => setNewBreed(e.target.value)}
            >
                <option disabled selected>
                    Select Dog Breed
                </option>
                {breeds &&
                    Object.keys(breeds).map((dog, i) => {
                        return (
                            <option
                                key={i}
                                value={dog}
                                onClick={() => handleClick(dog)}
                            >
                                {dog}
                            </option>
                        );
                    })}
            </select>
        </div>
    );
};

export default BreedSelection;
