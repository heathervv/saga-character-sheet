import { useState, useEffect, useRef } from "react"
import { useContentManagerContext } from '../../contexts/ContentManager/ContentManager'
import { getData, saveData } from '../../data/storageHelpers'
import { handleSummaryClick } from '../../helpers/helpers'
import IconHamburger from "../../assets/images/icon-hamburger"

enum DamageSeverity {
    Minor = "minor",
    Major = "major",
    Severe = "severe"
}

type ListItem = {
    name: string
    damage?: {
        [key: number]: {
            minor?: number
            major?: number
            severe?: number
        }
    }
}

const renderDamage = (
    multiplier: number,
    damage: ListItem['damage'],
    index: number,
    handleDamageChange: (index: number, damageType: number, damageSeverity: DamageSeverity, newValue: number) => void
) => {
    const appendMultiplier = multiplier > 1 ? ` x${multiplier}` : ''

    return (
        <div className="flex flex-col lg:grow mb-4 lg:mb-0">
            <div className="flex flex-row lg:justify-around items-end">
                <div>
                    <label className="text-xs block text-center">Minor{appendMultiplier}</label>
                    <input
                        className="input input-xs w-18"
                        min="0"
                        type="number"
                        value={damage?.[multiplier]?.minor || ""}
                        onChange={(e) => handleDamageChange(index, multiplier, DamageSeverity.Minor, parseInt(e.target.value))}
                    />
                </div>
                <p>/</p>
                <div>
                    <label className="text-xs block text-center">Major{appendMultiplier}</label>
                    <input
                        className="input input-xs w-18"
                        min="0"
                        type="number"
                        value={damage?.[multiplier]?.major || ""}
                        onChange={(e) => handleDamageChange(index, multiplier, DamageSeverity.Major, parseInt(e.target.value))}
                    />
                </div>
                <p>/</p>
                <div>
                    <label className="text-xs block text-center">Severe{appendMultiplier}</label>
                    <input
                        className="input input-xs w-18"
                        min="0"
                        type="number"
                        value={damage?.[multiplier]?.severe || ""}
                        onChange={(e) => handleDamageChange(index, multiplier, DamageSeverity.Severe, parseInt(e.target.value))}
                    />
                </div>
            </div>
        </div>
    )
}

const WeaponList = ({ id }: { id: string }) => {
    const { selectedCharacterId } = useContentManagerContext()
    const [items, setItems] = useState<ListItem[]>([])
    const [openIndex, setOpenIndex] = useState<number>(-1)

    const dragSection = useRef<number>(0)
    const draggedOverSection = useRef<number>(0)

    useEffect(() => {
        const data = getData<ListItem[]>(id, selectedCharacterId)

        setItems(data || [])
    }, [selectedCharacterId])

    const handleAdd = () => {
        setItems([...items, { name: '' }])
    }

    const handleRemove = (index: number) => {
        const newItems = items.filter((_, i) => i !== index)
        setItems(newItems)
        saveData<ListItem[]>(id, newItems, selectedCharacterId)
    }

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

    // DRAG & DROP
    const handleDragStart = (index: number) => {
        dragSection.current = index
    }
    const handleDragEnter = (index: number) => (draggedOverSection.current = index)
    const handleSort = () => {
        // Clone the list because otherwise you're editing the original
        const itemsClone = [...(items || [])]
        // Temporarily store item because we're about to delete it from the list
        const temp = itemsClone[dragSection.current]
        // Delete item from it's original index in the list
        itemsClone.splice(dragSection.current, 1)
        // Place item into list at the index where it was dropped
        itemsClone.splice(draggedOverSection.current, 0, temp)
        setItems(itemsClone)
        saveData<ListItem[]>(id, itemsClone, selectedCharacterId)
    }

    const handleNameChange = (index: number, newName: string) => {
        const newItems = [...items]
        newItems[index].name = newName
        setItems(newItems)
        saveData<ListItem[]>(id, newItems, selectedCharacterId)
    }

    const handleDamageChange = (index: number, damageType: number, damageSeverity: DamageSeverity, newValue: number) => {
        const newItems = [...items]

        if (!newItems[index].damage) {
            newItems[index].damage = {
                1: {},
                2: {},
                3: {}
            }
        }
        newItems[index].damage[damageType][damageSeverity] = newValue
        setItems(newItems)
        saveData<ListItem[]>(id, newItems, selectedCharacterId)
    }

    return (
        <>
            <div className="flex flex-col gap-1">
                {items.map((item, index) => (
                    <div key={`${id}-${index}`} className="flex flex-row gap-1" onDragOver={(e) => e.preventDefault()}>
                        <div draggable={true}
                            onDragStart={() => handleDragStart(index)}
                            onDragEnter={() => handleDragEnter(index)}
                            onDragEnd={handleSort}>
                            <IconHamburger className="w-3 h-3 text-base-content/25 mt-4" />
                        </div>
                        <details className="collapse bg-base-100 border border-base-content/30" name={`accordion-${id}`}>
                            <summary
                                className="collapse-title text-sm py-2 px-4"
                                onClick={(e) => handleSummaryClick(index, handleToggle, e)}
                            >
                                <div className="flex flex-row justify-between items-center">
                                    <div className="grow">
                                        <input
                                            type="text"
                                            className="input input-xs inline-block w-1/3"
                                            placeholder="Add new weapon here..."
                                            value={item.name}
                                            onChange={(e) => handleNameChange(index, e.target.value)}
                                        />
                                    </div>
                                    <p>{openIndex === index ? '-' : '+'}</p>
                                </div>
                            </summary>
                            <div className="collapse-content pt-0 pb-2 px-4">
                                <div className="lg:flex lg:flex-row lg:gap-12">
                                    {renderDamage(1, item.damage, index, handleDamageChange)}
                                    {renderDamage(2, item.damage, index, handleDamageChange)}
                                    {renderDamage(3, item.damage, index, handleDamageChange)}
                                </div>
                                <button
                                    className="btn btn-xs btn-error lg:mt-4"
                                    onClick={() => handleRemove(index)}
                                >
                                    Remove weapon
                                </button>
                            </div>
                        </details>
                    </div>
                ))}
            </div>
            <button className="btn btn-sm btn-link text-base-content justify-start mt-2 w-full" onClick={handleAdd}>+ Add</button>
        </>
    )
}

export default WeaponList