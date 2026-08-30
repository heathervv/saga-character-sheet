import { useState, useEffect } from "react"
import { useContentManagerContext } from '../../contexts/ContentManager/ContentManager'
import { getData, saveData } from '../../data/storageHelpers'
import { handleSummaryClick } from '../../helpers/helpers'

type ListItem = {
    name: string
    notes: string
    ascendDice?: boolean
}

const List = ({ id, toggleAscendDice, full }: { id: string, toggleAscendDice?: boolean, full?: boolean }) => {
    const { selectedCharacterId } = useContentManagerContext()
    const [items, setItems] = useState<ListItem[]>([])
    const [openIndex, setOpenIndex] = useState<number>(-1)

    useEffect(() => {
        const data = getData<ListItem[]>(id, selectedCharacterId)

        setItems(data || [])
    }, [selectedCharacterId])

    const handleAdd = () => {
        setItems([...items, { name: '', notes: '', ascendDice: toggleAscendDice ? false : undefined }])
    }

    const handleRemove = (index: number) => {
        const newItems = items.filter((_, i) => i !== index)
        setItems(newItems)
        saveData<ListItem[]>(id, newItems, selectedCharacterId)
    }

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

    const handleNameChange = (index: number, newName: string) => {
        const newItems = [...items]
        newItems[index].name = newName
        setItems(newItems)
        saveData<ListItem[]>(id, newItems, selectedCharacterId)
    }

    const handleNotesChange = (index: number, newNotes: string) => {
        const newItems = [...items]
        newItems[index].notes = newNotes
        setItems(newItems)
        saveData<ListItem[]>(id, newItems, selectedCharacterId)
    }

    const handleAscendDiceToggle = (index: number) => {
        const newItems = [...items]
        newItems[index].ascendDice = !newItems[index].ascendDice
        setItems(newItems)
        saveData<ListItem[]>(id, newItems, selectedCharacterId)
    }

    return (
        <>
            <div className="flex flex-col gap-1">
                {items.map((item, index) => (
                    <details key={`${id}-${index}`} className="collapse bg-base-100 border border-base-content/30" name={`accordion-${id}`}>
                        <summary
                            className="collapse-title text-sm py-2 px-4"
                            onClick={(e) => handleSummaryClick(index, handleToggle, e)}
                        >
                            <div className="flex flex-row justify-between items-center">
                                <div className="grow">
                                    {toggleAscendDice && (
                                        <input
                                            type="checkbox"
                                            className="checkbox checkbox-xs mr-2"
                                            checked={item.ascendDice || false}
                                            onChange={() => handleAscendDiceToggle(index)}
                                        />
                                    )}
                                    <input
                                        type="text"
                                        className={`input input-xs inline-block ${full ? 'w-1/3 lg:w-3/4' : 'w-1/3'}`}
                                        placeholder="Add new skill here..."
                                        value={item.name}
                                        onChange={(e) => handleNameChange(index, e.target.value)}
                                    />
                                </div>
                                <p>{openIndex === index ? '-' : '+'}</p>
                            </div>
                        </summary>
                        <div className="collapse-content pt-0 pb-2 px-4">
                            <textarea
                                className="textarea textarea-xs w-full field-sizing-content"
                                value={item.notes}
                                onChange={(e) => handleNotesChange(index, e.target.value)}
                            />
                            <button
                                className="btn btn-xs btn-error mt-2"
                                onClick={() => handleRemove(index)}
                            >
                                Remove skill
                            </button>
                        </div>
                    </details>
                ))}
            </div>
            <button className="btn btn-sm btn-link text-base-content justify-start mt-2 w-full" onClick={handleAdd}>+ Add</button>
        </>
    )
}

export default List