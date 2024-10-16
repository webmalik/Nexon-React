import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        const wrapper = document.getElementById('wrapper');

        if (!isOpen) {
            document.body.classList.add('lock');
            wrapper.style.maxHeight = '100dvh';
            wrapper.style.overflow = 'hidden';
        } else {
            document.body.classList.remove('lock');
            wrapper.style.maxHeight = '100dvh';
            wrapper.style.overflow = 'hidden';

            setTimeout(() => {
                wrapper.style.maxHeight = '10000dvh';
                wrapper.style.overflow = 'visible';
            }, 500);
        }

        setIsOpen(!isOpen);
    };

    return <StateContext.Provider value={{ isOpen, toggleMenu }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
