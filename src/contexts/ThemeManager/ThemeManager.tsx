import {
    createContext,
    useContext,
} from 'react'

export enum THEMES {
    LIGHT = 'pastel',
    DARK = 'dracula'
}

interface ThemeManagerContextType {
    activeTheme: THEMES
    saveActiveTheme: (value: THEMES) => void;
}

export const ThemeManagerContext = createContext<ThemeManagerContextType | null>(null)

export const useThemeManagerContext = () => {
    const context = useContext(ThemeManagerContext)

    const { activeTheme, saveActiveTheme } = context || {}

    return {
        activeTheme, saveActiveTheme
    }
}
