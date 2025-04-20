// Navbar
import { Menu, Trash2 } from 'lucide-react';
import React from 'react';

function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
    return (
        <div className="flex items-center justify-between px-4 py-2 border-b dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-white shadow-md">
            <button
                onClick={toggleSidebar}
                className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-zinc-800 p-2 rounded"
            >
                {/* <Trash2 size={20} /> */}
                <Menu size={20} />
            </button>
            <span className="font-bold text-lg">Vision Docs</span>
        </div>
    );
}

export default Navbar;