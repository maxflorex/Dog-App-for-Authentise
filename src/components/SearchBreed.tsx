import { useState } from 'react';
import _ from 'lodash';

type Props = {
    breeds: any;
    setNewBreed: any;
};

const SearchBreed = ({ breeds, setNewBreed }: Props) => {
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // FILTERING BREED BASED ON SEARCH
    const onChangeHandler = (text: string) => {
        let matches: any = [];
        if (text.length > 0) {
            matches = Object.keys(breeds).filter((breed: any) => {
                const regex = new RegExp(`${text}`, 'gi');
                return breed.match(regex);
            });
        }
        // CLEAN UP
        setSuggestions(matches);
        setText(text);
    };

    // LOADASH ;)
    const chunked = _.chunk(suggestions, 4);

    // CLICK HANDLER
    const hanldeCLick = (dog: any) => {
        setNewBreed(dog);
        setText('');
    };

    return (
        <div className="flex flex-col gap-4 relative">
            <form action="">
                <input
                    className="input text-white"
                    placeholder="Search Dog Breed..."
                    value={text}
                    onChange={(e) => onChangeHandler(e.target.value)}
                />
                {text !== '' && (
                    <span
                        className="btn btn-circle absolute -right-16 top-16"
                        onClick={() => setText('')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </span>
                )}
            </form>
            {text !== '' && (
                <ul className="absolute top-16 flex flex-col gap-4 w-full">
                    {chunked.length > 0 &&
                        text !== '' &&
                        chunked[0].map((data: any, i: number) => {
                            return (
                                <div
                                    key={i}
                                    className=" bg-teal-300 w-full rounded-md p-4 hover:bg-teal-400 cursor-pointer z-50"
                                    onClick={() => hanldeCLick(data)}
                                >
                                    <li className="text-teal-900">{data}</li>
                                </div>
                            );
                        })}
                    <div className="border-2 bg-teal-200  border-teal-300 w-full rounded-md p-4 hover:bg-teal-400 cursor-pointer z-50">
                        {suggestions.length > 0 ? (
                            <li className="text-teal-900">Keep typing...</li>
                        ) : (
                            <li className="text-teal-900">No matches 😭</li>
                        )}
                    </div>
                </ul>
            )}
        </div>
    );
};

export default SearchBreed;
