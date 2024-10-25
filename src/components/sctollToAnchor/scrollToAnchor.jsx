import { useEffect } from 'react';

const ScrollToAnchor = () => {
    const handleHashChange = () => {
        // Отримуємо хеш із URL
        const hash = window.location.hash;
        if (hash) {
            // Знаходимо елемент по якорю і прокручуємо до нього
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 1500);
                setTimeout(() => {
                    window.history.replaceState(null, null, ' ');
                }, 10000);
            }
        }
    };

    useEffect(() => {
        // Виклик функції при завантаженні сторінки, якщо вже є хеш
        handleHashChange();

        // Додаємо обробник події для відстеження змін у хеші
        window.addEventListener('hashchange', handleHashChange);

        // Очищуємо обробник подій при відмонтовуванні компонента
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return null; // Цей компонент не відображає нічого
};

export default ScrollToAnchor;
