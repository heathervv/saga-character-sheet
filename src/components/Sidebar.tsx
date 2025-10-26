import { useContentManagerContext } from '../contexts/ContentManager/ContentManager'
import { SECTIONS, section_titles, section_icons } from '../data/sections'

import Card from './Card'
import IconArrow from '../assets/images/icon-arrow'
import { useState } from 'react'

type ItemProps = {
    section: SECTIONS,
    copy: string,
    isActive: boolean,
    handleClick: (value: SECTIONS) => void
}

const Item = ({ section, copy, isActive, handleClick }: ItemProps) => {
    const Icon = section_icons[section]

    return (
        <li className="flex flex-1">
            <button
                className={`flex flex-1 pt-1 pb-1 pl-3 pr-3 cursor-pointer rounded-full text-left text-sm hover:bg-base-300 ${isActive && 'bg-base-300'}`}
                onClick={() => handleClick(section)}>
                <Icon className="pr-1 w-5 h-5 text-info" />
                {copy}
            </button>
        </li>
    )
}

const Sidebar = () => {
    const { activeSection, setActiveSection } = useContentManagerContext()
    const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false)

    const Icon = section_icons[activeSection as SECTIONS]

    const onDropdownClick = () => {
        setDropdownIsOpen(!dropdownIsOpen)
    }

    const onSectionClick = (section: SECTIONS) => {
        setActiveSection?.(section)
        setDropdownIsOpen(false)
    }

    return (
        <Card className="lg:w-3xs">
            <>
                <button
                    id="dropdownBtn"
                    className="cursor-pointer lg:hidden font-medium rounded-lg text-sm px-1 flex items-center"
                    type="button"
                    onClick={onDropdownClick}
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
                        {Object.entries(section_titles).map(([key, value]) => (
                            <Item
                                key={key}
                                section={key as SECTIONS}
                                copy={value}
                                isActive={activeSection === key}
                                handleClick={onSectionClick}
                            />
                        ))}
                    </ul>
                </div>
            </>
        </Card>
    )
}

export default Sidebar