import Dice from "../elements/Dice"
import List from "../elements/List"
import Number from "../elements/Number"
import Text from "../elements/Text"

const BASE_KEY = 'magic_'

const MagicSkills = () => (
    <section>
        <Text id={`${BASE_KEY}archetype`} label="Archetype" />
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section>
            <p className="text-lg font-bold mb-2">Magic Dice</p>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                <div className="lg:mr-4">
                    <Dice id={`${BASE_KEY}dice`} />
                </div>
                <div className="flex flex-col md:flex-row lg:flex-col flex-1 gap-2">
                    <Number
                        id={`${BASE_KEY}available_dice`}
                        label="Available Dice"
                        tooltip="Dice that are half or lower are removed from the pool, requiring a week's rest to replenish. This is ignored with a nat 20."
                    />
                    <Number id={`${BASE_KEY}total_die_pool`} label="Total Die Pool" />
                </div>
                <div className="flex flex-col md:flex-row lg:flex-col flex-1 gap-2">
                    <Number id={`${BASE_KEY}bonus_dice`} label="Bonus Dice" />
                    <Number
                        id={`${BASE_KEY}overload`}
                        label="Overload"
                        tooltip="Your dice will overload if you roll this many dice or more per spell. You must reclaim half of the dice rounded up. For every die above your overload value, you must reclaim an extra two dice."
                    />
                </div>
            </div>
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 lg:pr-6">
                <p className="text-lg font-bold mb-2">Magic Spells</p>
                <List id={`${BASE_KEY}spells`} type="spell" />
            </div>
            <div className="pt-4 lg:pt-0 lg:w-1/3 lg:pl-6 lg:border-l lg:border-base-content/10">
                <p className="text-lg font-bold mb-2">Magic Lines</p>
                <List id={`${BASE_KEY}lines`} full type="line" />
            </div>
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section>
            <p className="text-lg font-bold mb-2">Spell Combos</p>
            <List id={`${BASE_KEY}spell_combos`} type="spell combo" />
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section className="flex flex-col lg:flex-row">
            <div className="flex-1 lg:pr-6">
                <p className="text-lg font-bold mb-2">Origins</p>
                <List id={`${BASE_KEY}origins`} type="origin" />
            </div>
            <div className="pt-4 lg:pt-0 flex-1 lg:pl-6 lg:border-l lg:border-base-content/10">
                <p className="text-lg font-bold mb-2">Weapon Skills</p>
                <List id={`${BASE_KEY}weapon_skills`} type="weapon skill" />
            </div>
        </section>

    </section>
)

export default MagicSkills