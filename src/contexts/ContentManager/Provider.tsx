import { useState, useEffect, useCallback } from 'react'
import { ContentManagerContext } from './ContentManager'
import { SECTIONS } from '../../data/sections'

const BASE_ORDER = Object.values(SECTIONS).map((section: SECTIONS) => section)
const STORAGE_KEY = 'order_of_sections'

export const ContentManagerProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeSection, setActiveSection] = useState<SECTIONS>(SECTIONS.SECTION_ONE)
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
        const savedOrder = localStorage.getItem(STORAGE_KEY)
        const parsedSavedOrder = savedOrder ? JSON.parse(savedOrder) as SECTIONS[] : undefined

        // If there is a saved order, but there have been new sections added, reset
        if (parsedSavedOrder && parsedSavedOrder.length < BASE_ORDER.length) {
            localStorage.setItem(STORAGE_KEY, '')
        } else if (parsedSavedOrder) {
            saveLatestOrder(parsedSavedOrder)
        }
    }, [saveLatestOrder])

    return (
        <ContentManagerContext.Provider
            value={{
                activeSection, setActiveSection, order, setOrder, saveLatestOrder
            }}
        >
            {children}
        </ContentManagerContext.Provider>
    )
}