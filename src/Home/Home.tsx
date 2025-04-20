import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import MainContent from "../components/mainContent/MainContent";

function Home() {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev); // Update the state
    };

    // Handle keyboard shortcuts for opening/closing the sidebar
    // Ctrl + B (or Cmd + B on Mac) to toggle the sidebar

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const isMac = navigator.userAgent.includes("Mac");
            const isCtrlOrCmd = isMac ? event.metaKey : event.ctrlKey;

            if (isCtrlOrCmd && event.key.toLowerCase() === "b") {
                event.preventDefault(); // Prevent default browser behavior
                toggleSidebar(); // Toggle the sidebar
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar toggleSidebar={toggleSidebar}  />
            

            <div className="flex flex-1">
                <Sidebar isOpen = {sidebarOpen} />
                <MainContent sidebarOpen={sidebarOpen} />
            </div>
        </div>
        
    );
}

export default Home;