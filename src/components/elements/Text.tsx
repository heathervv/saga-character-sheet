import { useEffect, useState } from 'react'
import { useContentManagerContext } from '../../contexts/ContentManager/ContentManager'
import { getData, saveData } from '../../data/storageHelpers'
import WithTooltip from './WithTooltip'

const Text = ({ id, label, tooltip }: { id: string; label: string; tooltip?: string }) => {
    const { selectedCharacterId } = useContentManagerContext()
    const [value, setValue] = useState<string>('')

    useEffect(() => {
        const data = getData<string>(id, selectedCharacterId)

        setValue(data || '')
    }, [selectedCharacterId])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setValue(newValue)
        saveData<string>(id, newValue, selectedCharacterId)
    }

    return (
        <div className="block">
            {tooltip ? (
                <WithTooltip text={tooltip}>
                    <label className="mb-1 inline-block text-sm" htmlFor={id}>{label}:</label>
                </WithTooltip>
            ) : (
                <label className="mb-1 block text-sm" htmlFor={id}>{label}:</label>
            )}
            <input className="input input-md" id={id} type="text" value={value} onChange={onChange} />
        </div>
    )
}

export default Text