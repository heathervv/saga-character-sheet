import {
    createContext,
    useContext,
} from 'react'
import { SECTIONS } from '../../data/sections';

interface ContentManagerContextType {
    activeSection: SECTIONS;
    setActiveSection: (value: SECTIONS) => void;
}

export const ContentManagerContext = createContext<ContentManagerContextType | null>(null)

export const useContentManagerContext = () => {
    const context = useContext(ContentManagerContext)

    const { activeSection, setActiveSection } = context || {}

    return {
        activeSection, setActiveSection
    }
}
