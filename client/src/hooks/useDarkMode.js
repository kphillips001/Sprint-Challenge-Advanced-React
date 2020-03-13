import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key) => {
    const [value, setValue] = useLocalStorage(key);
    
    useEffect(() => {
        const button = document.querySelector('button');
        value ? button.classList.add('dark-mode') : button.classList.remove('dark-mode');
    }, [value])

    return [value, setValue];
}
