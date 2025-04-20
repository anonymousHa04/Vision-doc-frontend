const MainContent = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
    return (
        <main
            className={`flex-1 transition-all duration-300 ease-in-out ${sidebarOpen ? "ml-0 md:ml-0" : ""
                } p-6 bg-gray-50 dark:bg-zinc-800`}
        >
            <h1 className="text-2xl font-bold">What can I Do for you ?</h1>

            {/* place action buttons here */}
            <div className="mt-4 flex gap-4">
                <button className="bg-gray-200 dark:bg-zinc-800 p-3 rounded hover:bg-gray-300 dark:hover:bg-zinc-700 cursor-pointer">
                    Create a Doc
                </button>
                <button className="bg-gray-200 dark:bg-zinc-800 p-3 rounded hover:bg-gray-300 dark:hover:bg-zinc-700 cursor-pointer">
                    Start a Session
                </button>
                <button className="bg-gray-200 dark:bg-zinc-800 p-3 rounded hover:bg-gray-300 dark:hover:bg-zinc-700 cursor-pointer">
                    Join a Session
                </button>
            </div>
        </main>
    );
};

export default MainContent;
