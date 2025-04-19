import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

function Home() {
    return (
        <>
            <Sidebar />
            <Navbar />
            <div>
                <h1>Home</h1>
                <p>This is the home page.</p>
            </div>
        </>
        
    );
}

export default Home;