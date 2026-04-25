import { useState, useEffect } from "react"
import { useContentManagerContext } from '../../contexts/ContentManager/ContentManager'
import { getData, saveData } from '../../data/storageHelpers'
import IconD4 from "../../assets/images/dice/icon-d4"
import IconD6 from "../../assets/images/dice/icon-d6"
import IconD8 from "../../assets/images/dice/icon-d8"
import IconD10 from "../../assets/images/dice/icon-d10"
import IconD12 from "../../assets/images/dice/icon-d12"

enum DICE {
    D4 = "d4",
    D6 = "d6",
    D8 = "d8",
    D10 = "d10",
    D12 = "d12"
}

const Dice = ({ id }: { id: string }) => {
    const { selectedCharacterId } = useContentManagerContext()
    const [value, setValue] = useState<DICE | undefined>(undefined)

    useEffect(() => {
        const data = getData<DICE>(id, selectedCharacterId)

        setValue(data || undefined)
    }, [selectedCharacterId])

    const reactToChange = (changedValue: DICE) => {
        // reset value if the same option is selected again
        if (changedValue === value) {
            setValue(undefined)
            saveData<DICE | string>(id, "", selectedCharacterId)
            return
        } else {
            setValue(changedValue)
            saveData<DICE>(id, changedValue, selectedCharacterId)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const parsedValue = event.target.value as DICE
        reactToChange(parsedValue)
    }

    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
        const parsedValue = (event.target as HTMLInputElement).value as DICE
        reactToChange(parsedValue)
    }

    return (
        <section>
            <fieldset className="flex flex-row gap-4">
                <label htmlFor={`${id}_${DICE.D4}`} className={`text-center ${value === DICE.D4 ? "text-accent" : ""}`}>
                    <IconD4 className="w-8 h-8" />
                    <input
                        type="radio"
                        id={`${id}_${DICE.D4}`}
                        name={`${id}_dice`}
                        value={DICE.D4}
                        hidden
                        onChange={handleChange}
                        onClick={handleClick}
                        checked={value === DICE.D4}
                    />
                    D4
                </label>

                <label htmlFor={`${id}_${DICE.D6}`} className={`text-center ${value === DICE.D6 ? "text-accent" : ""}`}>
                    <IconD6 className="w-8 h-8" />
                    <input
                        type="radio"
                        id={`${id}_${DICE.D6}`}
                        name={`${id}_dice`}
                        value={DICE.D6}
                        hidden
                        onChange={handleChange}
                        onClick={handleClick}
                        checked={value === DICE.D6}
                    />
                    D6
                </label>

                <label htmlFor={`${id}_${DICE.D8}`} className={`text-center ${value === DICE.D8 ? "text-accent" : ""}`}>
                    <IconD8 className="w-8 h-8" />
                    <input
                        type="radio"
                        id={`${id}_${DICE.D8}`}
                        name={`${id}_dice`}
                        value={DICE.D8}
                        hidden
                        onChange={handleChange}
                        onClick={handleClick}
                        checked={value === DICE.D8}
                    />
                    D8
                </label>
                <label htmlFor={`${id}_${DICE.D10}`} className={`text-center ${value === DICE.D10 ? "text-accent" : ""}`}>
                    <IconD10 className="w-8 h-8" />
                    <input
                        type="radio"
                        id={`${id}_${DICE.D10}`}
                        name={`${id}_dice`}
                        value={DICE.D10}
                        hidden
                        onChange={handleChange}
                        onClick={handleClick}
                        checked={value === DICE.D10}
                    />
                    D10
                </label>
                <label htmlFor={`${id}_${DICE.D12}`} className={`text-center ${value === DICE.D12 ? "text-accent" : ""}`}>
                    <IconD12 className="w-8 h-8" />
                    <input
                        type="radio"
                        id={`${id}_${DICE.D12}`}
                        name={`${id}_dice`}
                        value={DICE.D12}
                        hidden
                        onChange={handleChange}
                        onClick={handleClick}
                        checked={value === DICE.D12}
                    />
                    D12
                </label>
            </fieldset>
        </section>
    )
}

export default Dice