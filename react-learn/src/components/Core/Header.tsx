import viteLogo from "../../assets/vite.svg";
import reactLogo from "../../assets/react.svg";

const reactDescription = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max: number):number {
    return Math.floor(Math.random() * (max + 1));
}

function Header(){
    const description = reactDescription[genRandomInt(reactDescription.length)];
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <p>
                { description } React concepts you will need for apps!
            </p>
        </>
    );
}

export default Header;