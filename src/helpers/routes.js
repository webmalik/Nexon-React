export const getCleanPath = (pathname) => {
    if (pathname.length > 1 && pathname.endsWith('/')) {
        return pathname.slice(0, -1);
    }

    return pathname;
};

export const getLangPrefix = (pathname) => {
    if (pathname.startsWith('/ua')) return '/ua';
    if (pathname.startsWith('/ru')) return '/ru';

    return '';
};

export const isHomePath = (pathname) => {
    const path = getCleanPath(pathname);

    return path === '' || path === '/' || path === '/ua' || path === '/ru';
};

export const isLegalPath = (pathname) => {
    const path = getCleanPath(pathname);

    return path.includes('/impressum') || path.includes('/datenschutz');
};

export const getHomePath = (pathname) => {
    if (pathname.startsWith('/ua')) return '/ua/';
    if (pathname.startsWith('/ru')) return '/ru/';

    return '/';
};
