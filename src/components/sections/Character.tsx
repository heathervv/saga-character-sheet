import Text from '../elements/Text'
import Number from '../elements/Number'
import Checkbox from '../elements/Checkbox'
import WithTooltip from '../elements/WithTooltip'

// P. 36 for more details
// 1. HP
// 4. Grief
// 5. Rapport
// 6. Injuries
// 7. Reputation

const BASE_KEY = 'character_'

const Character = () => (
    <section>
        <section className="columns-3">
            <Text id={`${BASE_KEY}name`} label="Name" />
            <Text id={`${BASE_KEY}race`} label="Race" />
            <Number id={`${BASE_KEY}tier`} label="Tier" />
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section className="columns-3">
            <Number id={`${BASE_KEY}momentum`} label="Momentum" />
            <Number id={`${BASE_KEY}burden`} label="Burden" />
            <Checkbox
                id={`${BASE_KEY}swing`}
                label="Swing"
                tooltip="Choose to swing a roll in your favour. The ability is regained when the guide uses it against you."
            />
        </section>
        <hr className="mt-4 mb-4 border-base-content/10" />
        <section>
            <WithTooltip
                direction="right"
                text="Can be expended to allow a reroll and added before or after the result. Your pool replenishes on a week's rest."
            >
                <p className="mb-2 text-lg inline-block">Edge</p>
            </WithTooltip>
            <div className="columns-3">
                <Text id={`${BASE_KEY}edge_dice`} label="Edge Dice" />
                <Number id={`${BASE_KEY}edge_die_pool`} label="Total available dice" />
                <Number id={`${BASE_KEY}edge_die_used`} label="Dice Used" />
            </div>
        </section>
    </section>
)

export default Character