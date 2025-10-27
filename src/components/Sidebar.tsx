import { useState, useRef } from 'react'
import Card from './Card'
import IconArrow from '../assets/images/icon-arrow'
import IconArrange from '../assets/images/icon-arrange'
import IconHamburger from '../assets/images/icon-hamburger'
import { useContentManagerContext } from '../contexts/ContentManager/ContentManager'
import { SECTIONS, section_titles, section_icons } from '../data/sections'

type ItemProps = {
    section: SECTIONS,
    copy: string,
    isActive: boolean,
    handleClick: (value: SECTIONS) => void
    editable: boolean
    handleDragStart: () => void
    handleDragEnter: () => void
    handleDragEnd: () => void
}

const Item = ({
    section,
    copy,
    isActive,
    handleClick,
    editable,
    handleDragStart,
    handleDragEnter,
    handleDragEnd
}: ItemProps) => {
    const Icon = section_icons[section]

    // Skip rendering if for any reason the section doesn't exist in the data.
    if (!section_icons[section]) {
        return null
    }

    return (
        <li
            className="flex flex-1"
            draggable={editable}
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => e.preventDefault()}
        >
            <button
                className={`flex flex-1 pt-1 pb-1 pl-3 pr-3 cursor-pointer items-center rounded-full text-left text-sm hover:bg-base-300 ${isActive && 'bg-base-300'}`}
                onClick={() => handleClick(section)}>
                <Icon className="pr-1 w-5 h-5 text-base-content" />
                <span className="flex-1">
                    {copy}
                </span>
                {editable && <IconHamburger className="w-3 h-3 text-base-content/25" />}
            </button>
        </li>
    )
}

const Sidebar = () => {
    const { activeSection, setActiveSection, order, setOrder, saveLatestOrder } = useContentManagerContext()

    const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false)
    const [editable, setEditable] = useState<boolean>(false)

    const dragSection = useRef<number>(0)
    const draggedOverSection = useRef<number>(0)

    const Icon = section_icons[activeSection as SECTIONS]

    // MOBILE DROPDOWN HIDE/SHOW
    const handleDropdownClick = () => setDropdownIsOpen(!dropdownIsOpen)
    const handleSectionClick = (section: SECTIONS) => {
        setActiveSection?.(section)
        setDropdownIsOpen(false)
    }

    // DRAG & DROP
    const handleReorder = () => {
        if (editable && order) {
            saveLatestOrder?.(order)
        }

        setEditable(!editable)
    }
    const handleDragStart = (index: number) => (dragSection.current = index)
    const handleDragEnter = (index: number) => (draggedOverSection.current = index)
    const handleSort = () => {
        // Clone the list because otherwise you're editing the original
        const orderClone = [...(order || [])]
        // Temporarily store item because we're about to delete it from the list
        const temp = orderClone[dragSection.current]
        // Delete item from it's original index in the list
        orderClone.splice(dragSection.current, 1)
        // Place item into list at the index where it was dropped
        orderClone.splice(draggedOverSection.current, 0, temp)
        setOrder?.(orderClone)
    }

    return (
        <Card className="lg:w-3xs">
            <>
                <button
                    id="dropdownBtn"
                    className="cursor-pointer lg:hidden font-medium rounded-lg text-sm px-1 flex items-center"
                    type="button"
                    onClick={handleDropdownClick}
                >
                    <span className="flex flex-1 text-left">
                        <Icon className="pr-1 w-5 h-5 text-info" />
                        {section_titles[activeSection as SECTIONS]}
                    </span>
                    <IconArrow className={`w-2.5 h-2.5 ms-3 ${dropdownIsOpen ? 'rotate-180' : ''}`} />
                </button>
                <hr className={`my-2 border-base-content/10 lg:hidden ${!dropdownIsOpen ? 'hidden' : ''}`} />
                <div id="dropdown" className={`${!dropdownIsOpen ? 'hidden' : ''} lg:block`}>
                    <ul className="flex flex-col gap-y-2" aria-labelledby="dropdownBtn">
                        {(order || []).map((section, i) => (
                            <Item
                                key={section}
                                section={section as SECTIONS}
                                copy={section_titles[section as SECTIONS]}
                                isActive={activeSection === section}
                                handleClick={handleSectionClick}
                                editable={editable}
                                handleDragStart={() => handleDragStart(i)}
                                handleDragEnter={() => handleDragEnter(i)}
                                handleDragEnd={handleSort}
                            />
                        ))}
                    </ul>
                    <hr className="mt-2 border-base-content/10" />
                    <button onClick={handleReorder} className="cursor-pointer flex w-full text-sm items-center p-2">
                        <IconArrange className="w-6 h-6 mr-1 text-base-content/50" />
                        <span className="block flex-1 text-left text-base-content/50 italic">
                            {editable ? 'Confirm order' : 'Reorder sections'}
                        </span>
                    </button>
                </div>
            </>
        </Card>
    )
}

export default Sidebar