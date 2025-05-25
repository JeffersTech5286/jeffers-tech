'use client';

import { useEffect } from 'react';

interface ClientStylesheetLoaderProps {
    href: string;
    id?: string
}

const ClientStylesheetLoader: React.FC<ClientStylesheetLoaderProps> = ({ href, id }) => {
    useEffect(() => {
        if (id && document.getElementById(id)) {
            return;
        }

        const link = document.createElement('link');
        link.href = href;
        link.rel = 'preload'
        link.as = 'style';
        if (id) {
            link.id = id;
        }

        link.onload = () => {
            link.onload = null;
            link.rel = 'stylesheet';
        };

        link.onerror = () => {
            link.onerror = null;
            link.rel = 'stylesheet'
        };

        document.head.appendChild(link);

        return () => {
            if (id) {
                const existingLink = document.getElementById(id);
                if (existingLink) {
                }
            }
        };
    }, [href, id])

    return null
};

export default ClientStylesheetLoader;