import Skill from "../elements/Skill"
import SkillRoll from "../content/SkillRoll"

const BASE_KEY = 'social_'

const SocialSkills = () => {
    return (
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
    )
}

export default SocialSkills