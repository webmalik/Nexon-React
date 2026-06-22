import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const targetId = decodeURIComponent(location.hash.replace('#', ''));

        let attempts = 0;
        const timers = [];

        const addTimer = (callback, delay) => {
            const timer = setTimeout(callback, delay);
            timers.push(timer);
        };

        const scrollToTarget = () => {
            const element = document.getElementById(targetId);

            if (!element) {
                attempts += 1;

                if (attempts <= 40) {
                    addTimer(scrollToTarget, 100);
                }

                return;
            }

            addTimer(() => {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }, 500);

            addTimer(() => {
                window.history.replaceState(null, '', `${location.pathname}${location.search}`);
            }, 5000);
        };

        addTimer(scrollToTarget, 300);

        return () => {
            timers.forEach((timer) => clearTimeout(timer));
        };
    }, [location.key, location.pathname, location.hash, location.search]);

    return null;
};

export default ScrollToAnchor;
