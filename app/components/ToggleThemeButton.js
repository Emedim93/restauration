'use client'; // indique que le composnat utilise le state 

import { useEffect, useState } from 'react';

const ToggleThemeButton = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.body.dataset.theme = savedTheme;
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    };

    return <button onClick={toggletheme}>Mode {theme === 'light' ? 'Sombre' : 'Clair'}</button>
};

export default ToggleThemeButton;