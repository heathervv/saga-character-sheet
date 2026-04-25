import { useState, useEffect, useCallback } from 'react'
import { nanoid } from 'nanoid'
import { ContentManagerContext } from './ContentManager'
import { SECTIONS } from '../../data/sections'

const CHARACTER_IDS_KEY = 'character_ids'
const BASE_ORDER = Object.values(SECTIONS).map((section: SECTIONS) => section)
const STORAGE_KEY = 'order_of_sections'

export const ContentManagerProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedCharacterId, setSelectedCharacterId] = useState<string | undefined>(undefined)
    const [activeSection, setActiveSection] = useState<SECTIONS>(BASE_ORDER[0])
    const [order, setOrder] = useState<SECTIONS[]>(BASE_ORDER)

    // Set the selected (or default) theme for the user
    const setLatestOrder = (order: SECTIONS[]) => {
        setOrder(order)
    }

    // Save the selected (or default) theme for a consistent experience
    const saveLatestOrder = useCallback((order: SECTIONS[]) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(order))
        setLatestOrder(order)
    }, [])

    useEffect(() => {
        const savedCharacterIds = localStorage.getItem(CHARACTER_IDS_KEY)
        const parsedSavedCharacterIds = savedCharacterIds ? JSON.parse(savedCharacterIds) as string[] : undefined

        if (parsedSavedCharacterIds) {
            setSelectedCharacterId(parsedSavedCharacterIds[0])
        } else {
            const newCharacterId = nanoid()
            setSelectedCharacterId(newCharacterId)
            localStorage.setItem(CHARACTER_IDS_KEY, JSON.stringify([newCharacterId]))
        }
    }, [])

    useEffect(() => {
        const savedOrder = localStorage.getItem(STORAGE_KEY)
        const parsedSavedOrder = savedOrder ? JSON.parse(savedOrder) as SECTIONS[] : undefined

        // If there is a saved order, but there have been new sections added, reset
        if (parsedSavedOrder && parsedSavedOrder.length < BASE_ORDER.length) {
            localStorage.setItem(STORAGE_KEY, '')
        } else if (parsedSavedOrder) {
            saveLatestOrder(parsedSavedOrder)
            setActiveSection(parsedSavedOrder[0])
        }
    }, [saveLatestOrder])

    return (
        <ContentManagerContext.Provider
            value={{
                activeSection, setActiveSection, order, setOrder, saveLatestOrder, selectedCharacterId
            }}
        >
            {children}
        </ContentManagerContext.Provider>
    )
}