type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="bg-teal-300 sticky top-full overflow-hidden">
            <div className="container flex flex-col justify-center mx-auto p-16 items-center gap-2">
                <h1 className="text-teal-900 italic">
                    If you made it this far, you should hire me 😉
                </h1>
                <p className="text-white font-semibold">
                    Created by{' '}
                    <a href="https://maxflores.dev" target="blank">Max Flores</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
