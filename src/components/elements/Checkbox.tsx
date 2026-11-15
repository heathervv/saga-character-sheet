import { useEffect, useState } from 'react'
import { useContentManagerContext } from '../../contexts/ContentManager/ContentManager'
import { getData, saveData } from '../../data/storageHelpers'
import WithTooltip, { Direction } from './WithTooltip'

const Checkbox = ({ id, label, tooltip, tooltipPlacement }: { id: string; label: string; tooltip?: string, tooltipPlacement?: Direction }) => {
    const { selectedCharacterId } = useContentManagerContext()
    const [value, setValue] = useState<boolean>(false)

    useEffect(() => {
        const data = getData<boolean>(id, selectedCharacterId)

        setValue(data || false)
    }, [selectedCharacterId])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.checked
        setValue(newValue)
        saveData<boolean>(id, newValue, selectedCharacterId)
    }

    return (
        <div className="block grow">
            {tooltip ? (
                <WithTooltip text={tooltip} direction={tooltipPlacement}>
                    <label className="mb-1 text-sm" htmlFor={id}>{label}:</label>
                </WithTooltip>
            ) : (
                <label className="mb-1 block text-sm" htmlFor={id}>{label}:</label>
            )}
            <input className="checkbox" id={id} type="checkbox" checked={value} onChange={onChange} />
        </div>
    )
}

export default Checkbox