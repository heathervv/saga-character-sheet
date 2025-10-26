import { THEMES, useThemeManagerContext } from "../contexts/ThemeManager/ThemeManager"
import Toggle from './Toggle'
import IconExternal from '../assets/images/icon-external'
import IconSun from '../assets/images/icon-sun'
import IconMoon from '../assets/images/icon-moon'

const Header = () => {
    const { activeTheme, saveActiveTheme } = useThemeManagerContext()

    const isDarkMode = activeTheme === THEMES.DARK

    const handleToggle = () => {
        saveActiveTheme?.(isDarkMode ? THEMES.LIGHT : THEMES.DARK)
    }

    return (
        <header className="flex pb-4">
            <h1 className="flex-1 text-base-content font-semibold">Legacy & Saga | Character Sheet</h1>
            <div className="flex">
                <Toggle
                    LeftOption={IconSun}
                    RightOption={IconMoon}
                    value="dark"
                    checked={activeTheme === THEMES.DARK}
                    onToggle={handleToggle}
                />
                <a
                    className="flex items-center text-base-content text-sm ml-4"
                    href="https://drive.google.com/file/d/1Ya1pwz2P_KosJkSyhi8p3ThUcoAfu3zr/view?usp=sharing"
                    target="_blank"
                >
                    Rules
                    <IconExternal className="pl-1 w-5 h-5 text-info" />
                </a>
            </div>
        </header>
    )
}

export default Header
