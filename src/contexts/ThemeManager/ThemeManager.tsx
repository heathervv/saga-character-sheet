import {
    createContext,
    useContext,
} from 'react'

// @ts-expect-error ENUMS are life and I won't stop using them, Typescript.
export enum THEMES {
    LIGHT = 'pastel',
    DARK = 'dracula'
}

interface ThemeManagerContextType {
    saveActiveTheme: (value: THEMES) => void;
}

export const ThemeManagerContext = createContext<ThemeManagerContextType | null>(null)

export const useThemeManagerContext = () => {
    const context = useContext(ThemeManagerContext)

    const { saveActiveTheme } = context || {}

    return {
        saveActiveTheme
    }
}
