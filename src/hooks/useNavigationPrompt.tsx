import { useEffect } from 'react';
import { useNavigate, useBlocker } from 'react-router-dom';

/**
 * Custom hook to prompt the user before navigating away from the current session.
 * @param shouldBlock - Whether navigation should be blocked.
 * @param message - The confirmation message to display.
 */
export function useNavigationPrompt(shouldBlock: boolean, message = "Are you sure you want to leave this session?") {
    const blocker = useBlocker(() => shouldBlock);
    const navigate = useNavigate();

    useEffect(() => {
        if (!shouldBlock || !blocker) return;

        const handleNavigation = () => {
            const confirmLeave = window.confirm(message);

            if (confirmLeave) {
                blocker.proceed?.(); // Proceed with navigation if confirmed
                localStorage.removeItem("sessionId"); // Clear session data
                navigate("/"); // Navigate to the home page
            } else {
                blocker.reset?.(); // Reset the blocker if navigation is canceled
            }
        };

        if (blocker.state === "blocked") {
            handleNavigation();
        }

        return () => {
            blocker.reset?.(); // Clean up the blocker on unmount
        };
    }, [shouldBlock, blocker, message]);
}
