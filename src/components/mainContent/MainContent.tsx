import { memo } from "react";
import { mainButtonStyle } from "../../styles/tailwindCss";
import { useNavigate } from "react-router";

const MainContent = memo(({ sidebarOpen }: { sidebarOpen: boolean }) => {
    const navigate = useNavigate();

    // function to handle start session
    const handleStartSession = () => {
        const sessionId = crypto.randomUUID();
        localStorage.setItem("sessionId", sessionId);
        navigate(`/session/${sessionId}`);
    };

    return (
        <main
            className={`flex-1 flex items-center justify-center flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? "ml-0 md:ml-0" : ""
                } bg-gray-50 dark:bg-zinc-800`}
        >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white">What can I Do for you ?</h1>

            {/* place action buttons here */}
            <div className="mt-4 flex gap-4">
                <button className={mainButtonStyle}>
                    Create a Doc
                </button>
                <button className={mainButtonStyle} onClick={handleStartSession}>
                    Start a Session
                </button>
                <button className={mainButtonStyle}>
                    Join a Session
                </button>
            </div>
        </main>
    );
});

export default MainContent;
