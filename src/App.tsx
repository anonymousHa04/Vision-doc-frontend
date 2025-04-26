import React, { useEffect } from 'react';
import Home from './Home/Home';
import useTheme from './hooks/useTheme';

function App() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleButtonClick = () => {
    toggleTheme();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key.toLowerCase() === "t") {
        event.preventDefault(); 
        toggleTheme();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* <button
        className='bg-blue-500 
        text-white 
        px-4 py-2 
        rounded-md 
        shadow-md 
        hover:bg-blue-600 
        transition 
        duration-300 
        ease-in-out
        transform(-50% -50%)'
        style={{ position: 'absolute', top: '50%', left: '50%' }}
        onClick={handleButtonClick}
      >
        Button to change theme
      </button> */}

      <Home />
      
    </>
  );
}

export default App;
