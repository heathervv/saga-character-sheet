import { useEffect, useState } from 'react'
import { getData, saveData } from '../../data/storageHelpers'
import WithTooltip from './WithTooltip'

const Checkbox = ({ id, label, tooltip }: { id: string; label: string; tooltip?: string }) => {
    const [value, setValue] = useState<boolean>(false)

    useEffect(() => {
        const data = getData<boolean>(id)

        setValue(data || false)
    }, [])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.checked
        setValue(newValue)
        saveData<boolean>(id, newValue)
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
            <input className="checkbox" id={id} type="checkbox" checked={value} onChange={onChange} />
        </div>
    )
}

export default Checkbox