import {
    createContext,
    useContext,
} from 'react'
import { SECTIONS } from '../../data/sections';

interface ContentManagerContextType {
    activeSection: SECTIONS;
    setActiveSection: (value: SECTIONS) => void;
    order: SECTIONS[];
    setOrder: (order: SECTIONS[]) => void;
    saveLatestOrder: (order: SECTIONS[]) => void;
    selectedCharacterId?: string;
    setSelectedCharacter: (characterIds: string[]) => void;
}

export const ContentManagerContext = createContext<ContentManagerContextType | null>(null)

export const useContentManagerContext = () => {
    const context = useContext(ContentManagerContext)

    const {
        activeSection,
        setActiveSection,
        order,
        setOrder,
        saveLatestOrder,
        selectedCharacterId,
        setSelectedCharacter,
    } = context || {}

    return {
        activeSection, setActiveSection, order, setOrder, saveLatestOrder, selectedCharacterId, setSelectedCharacter
    }
}
