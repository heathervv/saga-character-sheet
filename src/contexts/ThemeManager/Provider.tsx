import { useCallback, useEffect, useState } from 'react'
import { THEMES, ThemeManagerContext } from './ThemeManager'

const STORAGE_KEY = 'theme'

export const ThemeManagerProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeTheme, storeActiveTheme] = useState<THEMES>(THEMES.LIGHT)

    // Set the selected (or default) theme for the user
    const setActiveTheme = (theme: THEMES) => {
        document.querySelector('html')?.setAttribute('data-theme', theme);
        storeActiveTheme(theme)
    }

    // Save the selected (or default) theme for a consistent experience
    const saveActiveTheme = useCallback((theme: THEMES) => {
        localStorage.setItem(STORAGE_KEY, theme)
        setActiveTheme(theme)
    }, [])

    // The default theme (in index.html) is set to light mode.
    // This useEffect will attempt to see if this is a returning visitor and maintain
    // the theme they last experienced, or if they instead have their system in dark mode.
    // Regardless, it will save the theme to localstorage.
    useEffect(() => {
        const savedTheme = localStorage.getItem(STORAGE_KEY) as THEMES
        const systemIsDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

        // Set active theme (default light ignored as that's the fallback)
        if (savedTheme) {
            setActiveTheme(savedTheme)
        } else if (systemIsDarkMode) {
            setActiveTheme(THEMES.DARK)
        }

        // Save theme to storage
        if (!savedTheme) {
            saveActiveTheme(systemIsDarkMode ? THEMES.DARK : THEMES.LIGHT)
        }
    }, [saveActiveTheme])

    return (
        <ThemeManagerContext.Provider
            value={{
                activeTheme, saveActiveTheme,
            }}
        >
            {children}
        </ThemeManagerContext.Provider>
    )
}