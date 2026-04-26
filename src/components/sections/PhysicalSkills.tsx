import Skill from "../elements/Skill"
import SkillRoll from "../content/SkillRoll"
import TextArea from "../elements/TextArea"
import List from "../elements/List"
import WithTooltip from "../elements/WithTooltip"

const BASE_KEY = 'physical_'

const PhysicalSkills = () => {
    return (
        <section>
            <section className="flex flex-row gap-2">
                <div className="flex flex-col gap-4 grow md:pr-6">
                    <Skill id={`${BASE_KEY}slip`} name="Slip" />
                    <Skill id={`${BASE_KEY}flex`} name="Flex" subtitle="(Slip/Endure)" />
                    <Skill id={`${BASE_KEY}endure`} name="Endure" />
                    <Skill id={`${BASE_KEY}resist`} name="Resist" subtitle="(Endure/Force)" />
                    <Skill id={`${BASE_KEY}force`} name="Force" />
                    <Skill id={`${BASE_KEY}wrestle`} name="Wrestle" subtitle="(Force/Slip)" />
                </div>
                <div className="hidden md:block pl-6 border-l border-base-content/10">
                    <SkillRoll />
                </div>
            </section>
            <section className="flex flex-col">
                <WithTooltip text="Checked skills will use ascended dice when rolling.">
                    <p className="text-lg font-bold inline-block mb-2">Skills & Abilities</p>
                </WithTooltip>
                <List id={`${BASE_KEY}specific_abilities`} toggleAscendDice />
            </section>
            <hr className="mt-4 mb-4 border-base-content/10" />
            <section>
                <TextArea id={`${BASE_KEY}notes`} label="Notes" />
            </section>
        </section>
    )
}

export default PhysicalSkills