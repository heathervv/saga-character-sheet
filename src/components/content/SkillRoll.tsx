import IconD20 from "../../assets/images/dice/icon-d20"
import IconAverageD20 from "../../assets/images/dice/icon-d20-avg"
import IconRetry from "../../assets/images/icon-retry"
import IconBreak from "../../assets/images/icon-break"

const SkillRoll = () => (
    <section className="flex flex-col text-center">
        <p className="font-bold text-lg">Skill Roll</p>
        <p className="text-sm">Based on Skill Score</p>
        <p className="mt-2">Skill Dice</p>
        <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-col items-center">
                <IconD20 className="w-8 h-8" />
                <p className="text-xs">Skill Score 1</p>
            </div>
            <p className="text-xs">+</p>
            <div className="flex flex-col items-center">
                <IconD20 className="w-8 h-8" />
                <p className="text-xs">Skill Score 4</p>
            </div>
            <p className="text-xs">+</p>
            <div className="flex flex-col items-center">
                <IconD20 className="w-8 h-8" />
                <p className="text-xs">Skill Score 9</p>
            </div>
        </div>
        <p className="mt-2 mb-1">+ Reroll</p>
        <div className="flex flex-col items-center">
            <IconRetry className="w-6 h-6" />
            <p className="text-xs">Skill Score 12</p>
        </div>
        <p className="mt-2 mb-1">+ Average</p>
        <div className="flex flex-col items-center">
            <IconAverageD20 className="w-10 h-10" />
            <p className="text-xs">Skill Score 14</p>
        </div>
        <p className="mt-2 mb-1">+ Break</p>
        <div className="flex flex-col items-center">
            <IconBreak className="w-10 h-10" />
            <p className="text-xs">Skill Score 16</p>
        </div>
        <p className="mt-2 mb-1">+ Extra Die</p>
        <div className="flex flex-col items-center">
            <IconD20 className="w-8 h-8" />
            <p className="text-xs">Skill Score 20</p>
        </div>
    </section>
)

export default SkillRoll