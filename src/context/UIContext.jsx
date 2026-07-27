import { createContext, useContext, useState } from "react";

const UIContext = createContext(null);

export function UIProvider({ children }) {
    const [theme, setTheme] = useState('dark'); // light | dark

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <UIContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </UIContext.Provider>
    )
}

export function useUI() {
    return useContext(UIContext);
}