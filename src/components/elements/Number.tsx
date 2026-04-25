import { useEffect, useState } from 'react'
import { getData, saveData } from '../../data/storageHelpers'
import WithTooltip from './WithTooltip'

const Number = ({ id, label, tooltip }: { id: string; label: string; tooltip?: string }) => {
    const [value, setValue] = useState<number | ''>('')

    useEffect(() => {
        const data = getData<number>(id)

        setValue(data || '')
    }, [])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        const parsedValue = parseInt(newValue, 10)
        setValue(isNaN(parsedValue) ? '' : parsedValue)
        saveData<number>(id, parsedValue)
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
            <input className="input input-md" id={id} type="number" value={value} onChange={onChange} />
        </div>
    )
}

export default Number