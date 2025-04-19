// src/components/Sidebar.tsx
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, Plus, Trash2 } from "lucide-react";

const Sidebar = () => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const isMac = navigator.userAgent.includes("Mac");
            const isCtrlOrCmd = isMac ? event.metaKey : event.ctrlKey;

            if (isCtrlOrCmd && event.key.toLowerCase() === "b") {
                event.preventDefault(); // Prevent default browser behavior
                setOpen((prev) => !prev);
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [])

    return (
        <div
            className={`h-screen transition-all duration-300 flex flex-col ${open ? "w-64" : "w-16"
                } 
      transform ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }
      bg-gray-100 dark:bg-zinc-900 text-black dark:text-white border-r dark:border-zinc-700`}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b dark:border-zinc-700">
                <button onClick={() => setOpen(!open)}>
                    <Menu />
                </button>
                {open && <span className="text-lg font-bold">ChatGPT</span>}
            </div>

            {/* New Chat */}
            <button className="flex items-center gap-2 p-4 hover:bg-gray-200 dark:hover:bg-zinc-800 transition">
                <Plus size={20} />
                {open && <span>New Chat</span>}
            </button>

            {/* Chat List */}
            <div className="flex-1 overflow-auto px-2 space-y-2 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-gray-200 dark:bg-zinc-800 p-3 rounded hover:bg-gray-300 dark:hover:bg-zinc-700 cursor-pointer text-sm"
                    >
                        {open ? `Conversation ${i + 1}` : `#${i + 1}`}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
