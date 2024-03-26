import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        if (!isOpen) {
            document.body.classList.add('lock');
            document.getElementById('wrapper').style.maxHeight = '100dvh';
            document.getElementById('wrapper').style.overflow = 'hidden';
        } else {
            document.body.classList.remove('lock');
            document.getElementById('wrapper').style.maxHeight = '100dvh';
            document.getElementById('wrapper').style.overflow = 'hidden';

            setTimeout(() => {
                document.getElementById('wrapper').style.maxHeight = '10000dvh';
                document.getElementById('wrapper').style.overflow = 'visible';
            }, 500);
        }
        setIsOpen(!isOpen);
    };

    return <StateContext.Provider value={{ isOpen, toggleMenu }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
