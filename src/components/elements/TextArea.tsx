import { useEffect, useState } from 'react'
import { useContentManagerContext } from '../../contexts/ContentManager/ContentManager'
import { getData, saveData } from '../../data/storageHelpers'
import WithTooltip from './WithTooltip'

const TextArea = ({ id, label, tooltip }: { id: string; label: string; tooltip?: string }) => {
    const { selectedCharacterId } = useContentManagerContext()
    const [value, setValue] = useState<string>('')

    useEffect(() => {
        const data = getData<string>(id, selectedCharacterId)

        setValue(data || '')
    }, [selectedCharacterId])

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value
        setValue(newValue)
        saveData<string>(id, newValue, selectedCharacterId)
    }

    return (
        <div className="block">
            {tooltip ? (
                <WithTooltip text={tooltip}>
                    <label className="mb-1 text-sm" htmlFor={id}>{label}:</label>
                </WithTooltip>
            ) : (
                <label className="mb-1 block text-sm" htmlFor={id}>{label}:</label>
            )}
            <textarea className="textarea textarea-md field-sizing-content w-full" id={id} value={value} onChange={onChange} />
        </div>
    )
}

export default TextArea