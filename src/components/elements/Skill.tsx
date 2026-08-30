import Dice from "../elements/Dice"

type Props = {
    id: string;
    name: string;
    subtitle?: string;
    scoreId?: string;
    value?: number;
    score?: number;
    handleValueChange: (id: string, newValue: number) => void;
    handleScoreChange: (scoreId: string, newScore: number | string) => void;
}

const Skill = ({
    id,
    name,
    subtitle,
    scoreId,
    value,
    score,
    handleValueChange,
    handleScoreChange

}: Props) => {
    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        const parsedValue = parseInt(newValue, 10)

        handleValueChange(id, isNaN(parsedValue) ? 0 : parsedValue)
    }

    const onScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        const parsedValue = parseInt(newValue, 10)
        handleScoreChange(scoreId!, isNaN(parsedValue) ? "" : parsedValue)
    }

    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-2 sm:py-0">
            <div>
                <div className="flex flex-row">
                    <p className="font-bold mr-2 w-30">{name}</p>
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
                            <input className="text-sm w-12" min="0" max="20" name={scoreId} type="number" value={score} onChange={onScoreChange} />
                        </>
                    )}

                </div>
            </div>
            <Dice id={`${id}_dice`} />
        </div>
    )
}

export default Skill