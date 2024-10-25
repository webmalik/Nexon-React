import { useState, useEffect } from 'react';

const useScrollTo = () => {
    const [targetId, setTargetIdMain] = useState('');

    useEffect(() => {
        if (targetId) {
            document.body.style.overflow = 'visible';
            const element = document.getElementById(targetId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }
            setTargetIdMain('');
        }
    }, [targetId]);

    const handleScrollToMain = (id) => {
        setTargetIdMain(id);
    };

    const handleInstantScrollToMain = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const elementTop = element.offsetTop;

            document.documentElement.scrollTop = elementTop;
            document.body.scrollTop = elementTop;
        }
    };

    return { handleScrollToMain, handleInstantScrollToMain };
};

export default useScrollTo;
