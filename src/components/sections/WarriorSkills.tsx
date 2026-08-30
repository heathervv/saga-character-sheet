import Dice from "../elements/Dice"
import List from "../elements/List"
import Number from "../elements/Number"
import Text from "../elements/Text"
import WeaponList from "../elements/WeaponList"

const BASE_KEY = 'warrior_'

const WarriorSkills = () => (
    <section>
        <Text id={`${BASE_KEY}archetype`} label="Archetype" />
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section>
            <p className="text-lg font-bold mb-2">Stamina Dice</p>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
                <div className="lg:mr-4">
                    <Dice id={`${BASE_KEY}dice`} />
                </div>
                <div className="flex flex-col md:flex-row lg:flex-col flex-1 gap-2">
                    <Number
                        id={`${BASE_KEY}available_dice`}
                        label="Available Dice"
                    />
                    <Number id={`${BASE_KEY}total_die_pool`} label="Total Die Pool" />
                </div>
                <div className="flex flex-col md:flex-row lg:flex-col flex-1 gap-2">
                    <Number id={`${BASE_KEY}exhaustion`} label="Exhaustion" />
                    <Number
                        id={`${BASE_KEY}recovery`}
                        label="Recovery"
                        tooltip="Allows you to reduce stamina pool by 1. For every dice you have invested you can heal as many during a day's rest, and half as many on a night's rest."
                    />
                </div>
            </div>
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 lg:pr-6">
                <p className="text-lg font-bold mb-2">Skills</p>
                <List id={`${BASE_KEY}skills`} />
            </div>
            <div className="pt-4 lg:pt-0 lg:w-1/3 lg:pl-6 lg:border-l lg:border-base-content/10">
                <p className="text-lg font-bold mb-2">Origins</p>
                <List id={`${BASE_KEY}origins`} type="origin" />
            </div>
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section>
            <p className="text-lg font-bold mb-2">Weapons</p>
            <WeaponList id={`${BASE_KEY}weapons`} />
        </section>
    </section>
)

export default WarriorSkills