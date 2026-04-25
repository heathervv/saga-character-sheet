import { useState, useEffect } from "react"
import { useContentManagerContext } from '../../contexts/ContentManager/ContentManager'
import Dice from "../elements/Dice"
import { getData, saveData } from '../../data/storageHelpers'

const Skill = ({ id, name, subtitle }: { id: string; name: string; subtitle?: string }) => {
    const SCORE_ID = `${id}_score`
    const { selectedCharacterId } = useContentManagerContext()
    const [value, setValue] = useState<number>(0)
    const [score, setScore] = useState<number>(0)

    useEffect(() => {
        const data = getData<number>(id, selectedCharacterId)
        const score = getData<number>(SCORE_ID, selectedCharacterId)

        setValue(data || 0)
        setScore(score || 0)
    }, [selectedCharacterId])

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        const parsedValue = parseInt(newValue, 10)
        setValue(isNaN(parsedValue) ? 0 : parsedValue)
        saveData<number>(id, parsedValue, selectedCharacterId)
    }

    const onScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        const parsedValue = parseInt(newValue, 10)
        setScore(isNaN(parsedValue) ? 0 : parsedValue)
        saveData<number>(SCORE_ID, parsedValue, selectedCharacterId)
    }

    return (
        <div className="flex flex-row items-center gap-4">
            <div>
                <div className="flex flex-row">
                    <p className="font-bold mr-2 w-20">{name}</p>
                    <div className="flex flex-row">
                        <p className="font-bold mr-2">{value}</p>
                        <input type="range" min="0" max="5" name={id} value={value} onChange={onValueChange} className="range range-sm" />
                    </div>
                </div>
                <div className="flex flex-row">
                    {subtitle ? (
                        <p className="text-sm mr-2 italic">{subtitle}</p>
                    ) : (
                        <>
                            <p className="text-sm mr-2">Skill Score:</p>
                            <input className="text-sm w-12" min="0" max="20" name={SCORE_ID} type="number" value={score} onChange={onScoreChange} />
                        </>
                    )}

                </div>
            </div>
            <Dice id={`${id}_dice`} />
        </div>
    )
}

export default Skill