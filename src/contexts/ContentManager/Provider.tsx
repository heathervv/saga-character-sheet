import { useState } from 'react'
import { ContentManagerContext } from './ContentManager'
import { SECTIONS } from '../../data/sections'

export const ContentManagerProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeSection, setActiveSection] = useState<SECTIONS>(SECTIONS.SECTION_ONE)

    return (
        <ContentManagerContext.Provider
            value={{
                activeSection, setActiveSection,
            }}
        >
            {children}
        </ContentManagerContext.Provider>
    )
}