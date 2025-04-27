import { useEffect, useMemo } from "react";
import { useNavigationPrompt } from "../hooks/useNavigationPrompt";
import { useParams } from "react-router-dom";


function SessionPage() {
    const { sessionId } = useParams();

    const hasSession = useMemo(() => Boolean(sessionId), [sessionId]);

    useNavigationPrompt(hasSession, "Are you sure you want to leave this session?");

    return (
        // <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white">Session - {sessionId}</h1>
        // </div>
        
    );
}

export default SessionPage;