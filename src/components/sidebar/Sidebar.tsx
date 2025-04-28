// src/components/Sidebar.tsx
import React, { useEffect, useState } from "react";
import { Sun, Moon, Menu, Plus, Trash2 } from "lucide-react";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {

    return (
        <div
            className={`
                h-full 
                transition-all 
                duration-300 
                ease-in-out 
                bg-gray-100 dark:bg-zinc-900 
                text-black dark:text-white border-r 
                dark:border-zinc-700 
                ${isOpen ? "w-64" : "w-0 overflow-hidden"}`
            }>
            {/* New Chat */}
            <button className="flex items-center gap-2 p-4 hover:bg-gray-200 dark:hover:bg-zinc-800 transition">
                <Plus size={20} />
                {isOpen && <span>New Chat</span>}
            </button>

            {/* Chat List */}
            <div className="flex-1 overflow-auto px-2 space-y-2 mt-4">

                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-gray-200 dark:bg-zinc-800 p-3 rounded hover:bg-gray-300 dark:hover:bg-zinc-700 cursor-pointer text-sm"
                    >
                        {`Conversation ${i + 1} ${isOpen ? "Open" : "closed"}`}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Sidebar;
