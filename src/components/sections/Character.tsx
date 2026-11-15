import Text from '../elements/Text'
import TextArea from '../elements/TextArea'
import Number from '../elements/Number'
import Checkbox from '../elements/Checkbox'
import List from '../elements/List'
import WithTooltip, { Direction } from '../elements/WithTooltip'

const BASE_KEY = 'character_'

const Character = () => (
    <section>
        <section className="flex flex-col gap-2 md:flex-row">
            <Text id={`${BASE_KEY}name`} label="Name" />
            <Text id={`${BASE_KEY}race`} label="Race" />
            <Number id={`${BASE_KEY}tier`} label="Tier" />
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section>
            <p className="text-lg font-bold mb-2">Encounters</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="flex flex-col grow gap-2">
                    <Number id={`${BASE_KEY}hp_current`} label="Current HP" />
                    <Text id={`${BASE_KEY}hp_max`} label="Max HP" />
                </div>
                <div className="flex flex-col grow gap-2">
                    <Number
                        id={`${BASE_KEY}buffers_current`}
                        label="Current Buffers"
                        tooltip="Reduces the severity of an injury. You can use multiple buﬀers at once to further reduce the severity of an injury. A single injury buﬀer is regained after a week's rest."
                    />
                    <Number id={`${BASE_KEY}buffers_max`} label="Total Buffers" />
                </div>
                <div className="flex flex-col grow">
                    <Number id={`${BASE_KEY}energy`} label="Energy" />
                    <Number id={`${BASE_KEY}attack`} label="Attack Strength" />
                </div>
                <div className="flex flex-col grow">
                    <Checkbox
                        id={`${BASE_KEY}swing`}
                        label="Swing"
                        tooltip="Choose to swing a roll in your favour. The ability is regained when the guide uses it against you."
                        tooltipPlacement={Direction.Left}
                    />
                </div>
            </div>
            <WithTooltip
                text="Can be used to allow a reroll and added before or after the result. Your pool replenishes on a week's rest."
                direction={Direction.Right}
            >
                <p className="text-md font-bold mt-4 mb-2 inline-block">Edge</p>
            </WithTooltip>
            <div className="flex flex-col gap-2 sm:flex-row">
                <Number
                    id={`${BASE_KEY}edge_die_used`}
                    label="Available Dice"
                />
                <Text id={`${BASE_KEY}edge_dice`} label="Dice Type" tooltip="e.g. D4, D6, or D10" />
                <Number id={`${BASE_KEY}edge_die_pool`} label="Total Die Pool" />
            </div>
            <WithTooltip
                text="Comes from pieces of armourin your kit. Helps reduce damage taken."
                direction={Direction.Right}
            >
                <p className="text-md font-bold mt-4 mb-2 inline-block">Protection</p>
            </WithTooltip>
            <div className="flex flex-col gap-2 sm:flex-row">
                <Number
                    id={`${BASE_KEY}protection_die_used`}
                    label="Available Dice"
                />
                <Text id={`${BASE_KEY}protection_dice`} label="Dice Type" tooltip="e.g. D4, D6, or D10" />
                <Number id={`${BASE_KEY}protection_die_pool`} label="Total Die Pool" />
                <Number
                    id={`${BASE_KEY}protection_durability`}
                    label="Durability"
                    tooltip="Each dice you use above this amount increases the break value by 2 (Base break value is 1 or 2)."
                />
                <Number
                    id={`${BASE_KEY}protection_resistance`}
                    label="Resistance"
                    tooltip="Reduces the amount of damage taken. When a dice breaks you lose a point of resistance."
                    tooltipPlacement={Direction.Left}
                />
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <TextArea
                    id={`${BASE_KEY}protection_notes`}
                    label="Kit"
                />
            </div>
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section>
            <p className="text-lg font-bold mb-2">General or Group Skills</p>
            <List id={`${BASE_KEY}group_skills`} />
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section>
            <p className="text-lg font-bold mb-2">Other Notable Traits</p>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                <div className="flex flex-col gap-2 lg:w-1/2">
                    <TextArea
                        id={`${BASE_KEY}reputation`}
                        label="Reputation"
                    />
                    <TextArea id={`${BASE_KEY}grief`} label="Grief" />
                    <TextArea id={`${BASE_KEY}injuries`} label="Injuries" />
                </div>
                <div className="flex flex-col lg:w-1/2 gap-2 lg:pl-4 lg:border-l lg:border-base-content/10">
                    {/* THERE IS A TEMPORARY MIGRATION AT PLAY HERE (in ContentManager) */}
                    {/* {BASE_KEY}rapport translated into {BASE_KEY}rapport_list */}
                    {/* Safe to remove by Dec 1, 2026 */}
                    <div className="hidden lg:block">
                        <WithTooltip text="Allows you to ascend dice on a collective action." direction={Direction.Left}>
                            <p className="text-sm inline-block">Rapport</p>
                        </WithTooltip>
                    </div>
                    <div className="block lg:hidden">
                        <WithTooltip text="Allows you to ascend dice on a collective action." direction={Direction.Right}>
                            <p className="text-sm inline-block">Rapport</p>
                        </WithTooltip>
                    </div>
                    <List id={`${BASE_KEY}rapport_list`} type="rapport" full />
                </div>
            </div>
        </section>
    </section>
)

export default Character