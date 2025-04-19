import React from 'react';
import Home from './Home/Home';
import useTheme from './hooks/useTheme';

function App() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
    toggleTheme();
  };

  return (
    <>
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out'
        onClick={handleButtonClick}
      >
        Button to change theme
      </button>
      
      <Home />
      
    </>
  );
}

export default App;
