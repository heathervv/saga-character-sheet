import { useContentManagerContext } from '../contexts/ContentManager/ContentManager'
import { SECTIONS, section_titles } from '../data/sections'
import { IconPlaceholder } from '../assets/images/icon-placeholder'

import Card from './Card'

type ItemProps = {
    section: SECTIONS,
    copy: string,
    isActive: boolean,
    handleClick: (value: SECTIONS) => void
}

const Item = ({ section, copy, isActive, handleClick }: ItemProps) => (
    <li className="flex flex-1">
        <button
            className={`flex flex-1 pt-1 pb-1 pl-3 pr-3 cursor-pointer rounded-full text-left text-sm hover:bg-base-300 ${isActive && 'bg-base-300'}`}
            onClick={() => handleClick(section)}>
            <IconPlaceholder className="pr-1 w-5 h-5 text-info" />
            {copy}
        </button>
    </li>
)

const Sidebar = () => {
    const { activeSection, setActiveSection } = useContentManagerContext()

    const onClick = (section: SECTIONS) => {
        setActiveSection?.(section)
    }

    return (
        <Card className="w-3xs">
            <ul className="flex flex-col">
                {Object.entries(section_titles).map(([key, value]) => (
                    <Item
                        key={key}
                        section={key as SECTIONS}
                        copy={value}
                        isActive={activeSection === key}
                        handleClick={onClick}
                    />
                ))}
            </ul>
        </Card>
    )
}

export default Sidebar