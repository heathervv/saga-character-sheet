import List from "../elements/List"
import Number from "../elements/Number"
import Text from "../elements/Text"
import WithTooltip from "../elements/WithTooltip"

const BASE_KEY = 'higher_power_'

const HigherPower = () => (
    <section>
        <section className="flex flex-col gap-2 md:flex-row">
            <Text id={`${BASE_KEY}source`} label="Source" />
            <Text id={`${BASE_KEY}path`} label="Path" />
            <Text id={`${BASE_KEY}archetype`} label="Archetype" />
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section>
            <WithTooltip text="Once per weeks rest you may ask for one miracle from your higher power source, which will be provided if it's a reasonable request aligned with their ideals, and will replenish on a week's rest if your deity is pleased with you.">
                <p className="text-lg font-bold inline-block mb-2">Miracles</p>
            </WithTooltip>
            <List id={`${BASE_KEY}miracles`} type="miracle" />
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section>
            <p className="text-lg font-bold mb-2">Dice</p>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                <div className="flex flex-col md:flex-row lg:flex-col flex-1 gap-2">
                    <Number
                        id={`${BASE_KEY}available_dice`}
                        label="Available Dice"
                        tooltip="Dice can be reused until they decay. If your decay is 2, rolling a 2 will cause the dice to drop from the pool until the pool is restored. Dice pools will recover after a week’s rest."
                    />
                    <Number id={`${BASE_KEY}total_die_pool`} label="Total Die Pool" />
                </div>
                <div className="flex flex-col md:flex-row lg:flex-col flex-1 gap-2">
                    <Number id={`${BASE_KEY}temporary_dice`} label="Temporary Dice" />
                    <Number
                        id={`${BASE_KEY}decay`}
                        label="Decay"
                    />
                </div>
            </div>
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section>
            <p className="block text-lg font-bold mb-2">Boons</p>
            <p className="text-md font-bold inline-block mb-2">Primary Boons</p>
            <List id={`${BASE_KEY}primary_boons`} type="boon" />
            <span className="block mb-4" />
            <p className="text-md font-bold inline-block mb-2">Secondary Boons</p>
            <List id={`${BASE_KEY}secondary_boons`} type="boon" />
            <span className="block mb-4" />
            <p className="text-md font-bold inline-block mb-2">Tertiary Boons</p>
            <List id={`${BASE_KEY}tertiary_boons`} type="boon" />
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section>
            <p className="text-lg font-bold inline-block mb-2">Corruptions</p>
            <List id={`${BASE_KEY}corruptions`} type="corruption" />
        </section>
    </section>
)

export default HigherPower