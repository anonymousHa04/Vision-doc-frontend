// this is the sidebar component 

import useTheme from "../../hooks/useTheme";

function Sidebar() {
    const [theme, setTheme] = useTheme();

    const toggleTheme = () => {
        setTheme((prevTheme: string) => (prevTheme === "dark" ? "light" : "dark"));
    };

    const handleButtonClick = () => {
        console.log("Button clicked!");
        toggleTheme();
    };

    return (
        <div className="sidebar">
            <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                        <svg className="h-6 w-6 stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </svg>
                    </span>
                </div>
                <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>
            </div>
            <h2>Sidebar</h2>
            <button
                className='bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out'
                onClick={handleButtonClick}
            >
                {/* <svg className="h-6 w-6 stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> */}
                Button to change theme
            </button>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;