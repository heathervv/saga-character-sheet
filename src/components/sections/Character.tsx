import Text from '../elements/Text'
import TextArea from '../elements/TextArea'
import Number from '../elements/Number'
import Checkbox from '../elements/Checkbox'
import List from '../elements/List'
import WithTooltip from '../elements/WithTooltip'

const BASE_KEY = 'character_'

// @TODO DOCS - any other useful tooltips that should be added here?

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
                    <Number id={`${BASE_KEY}buffers_current`} label="Current Buffers" tooltip="You can regain one buffer on a night's rest, but cannot use this ability again until you have all of your buffers back." />
                    <Number id={`${BASE_KEY}buffers_max`} label="Total Buffers" />
                </div>
                <div className="flex flex-col grow">
                    <Number id={`${BASE_KEY}energy`} label="Energy" />
                    <Checkbox
                        id={`${BASE_KEY}swing`}
                        label="Swing"
                        tooltip="Choose to swing a roll in your favour. The ability is regained when the guide uses it against you."
                    />
                </div>
            </div>
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section>
            <p className="text-lg font-bold mb-2">Edge</p>
            <div className="flex flex-col gap-2 sm:flex-row">
                <Text id={`${BASE_KEY}edge_dice`} label="Edge Dice" />
                <Number id={`${BASE_KEY}edge_die_used`} label="Available Dice" tooltip="Can be used to allow a reroll and added before or after the result. Your pool replenishes on a week's rest." />
                <Number id={`${BASE_KEY}edge_die_pool`} label="Total Die Pool" />
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
                <div className="flex flex-col gap-2">
                    <TextArea
                        id={`${BASE_KEY}reputation`}
                        label="Reputation"
                    />
                    <TextArea id={`${BASE_KEY}grief`} label="Grief" />
                    <TextArea id={`${BASE_KEY}injuries`} label="Injuries" />
                </div>
                <div className="flex flex-col grow gap-2 lg:pl-4 lg:border-l lg:border-base-content/10">
                    {/* THERE IS A TEMPORARY MIGRATION AT PLAY HERE (in ContentManager) */}
                    {/* {BASE_KEY}rapport translated into {BASE_KEY}rapport_list */}
                    {/* Safe to remove by Dec 1, 2026 */}
                    <WithTooltip text="Allows you to ascend dice on a collective action.">
                        <p className="text-sm inline-block">Rapport</p>
                    </WithTooltip>
                    <List id={`${BASE_KEY}rapport_list`} type="rapport" full />
                </div>
            </div>
        </section>
    </section>
)

export default Character