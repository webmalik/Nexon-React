import { siteData } from './siteData';

export const navigationData = {
    menuItems: [
        {
            type: 'page',
            path: '/',
            label: 'Startseite',
        },
        {
            type: 'page',
            path: '/about/',
            label: 'Über uns',
        },
        {
            type: 'page',
            path: '/conditions/',
            label: 'Konditionen',
        },
        {
            type: 'page',
            path: '/projects/',
            label: 'Portfolio',
        },
    ],

    socials: [
        {
            id: 'instagram',
            label: 'Instagram',
            url: siteData.links.instagram,
            icon: 'instagram',
        },
        {
            id: 'telegram',
            label: 'Telegram',
            url: siteData.links.telegram,
            icon: 'telegram',
        },
    ],
};
