import Skill from "../elements/Skill"
import SkillRoll from "../content/SkillRoll"
import TextArea from "../elements/TextArea"
import List from "../elements/List"
import WithTooltip from "../elements/WithTooltip"

const BASE_KEY = 'social_'

const SocialSkills = () => {
    return (
        <section>
            <section className="flex flex-row gap-2">
                <div className="flex flex-col gap-4 grow md:pr-6">
                    <Skill id={`${BASE_KEY}charm`} name="Charm" />
                    <Skill id={`${BASE_KEY}advise`} name="Advise" subtitle="(Charm/Intuit)" />
                    <Skill id={`${BASE_KEY}intuit`} name="Intuit" />
                    <Skill id={`${BASE_KEY}improvise`} name="Improvise" subtitle="(Intuit/Intellect)" />
                    <Skill id={`${BASE_KEY}intellect`} name="Intellect" />
                    <Skill id={`${BASE_KEY}deceive`} name="Deceive" subtitle="(Intellect/Charm)" />
                </div>
                <div className="hidden md:block pl-6 border-l border-base-content/10">
                    <SkillRoll />
                </div>
            </section>
            <section className="flex flex-col pt-4 md:pt-0">
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

export default SocialSkills