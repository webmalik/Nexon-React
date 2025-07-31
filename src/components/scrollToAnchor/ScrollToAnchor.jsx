import { useEffect } from 'react';

const ScrollToAnchor = () => {
    const handleHashChange = () => {
        // Получаем хеш из URL
        const hash = window.location.hash;
        if (hash) {
            // Находим элемент по якорю и прокручиваем к нему
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 1500);
                    setTimeout(() => {
                        window.history.replaceState(null, null, ' ');
                }, 10000); // Задержка перед прокруткой, если она требуется
            }
        }
    };

    useEffect(() => {
        // Выполняем прокрутку при загрузке страницы, если есть хеш
        handleHashChange();

        // Добавляем обработчик события для отслеживания изменений хеша
        window.addEventListener('hashchange', handleHashChange);

        // Удаляем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return null; // Этот компонент ничего не рендерит
};

export default ScrollToAnchor;
