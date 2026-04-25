import Skill from "../elements/Skill"
import SkillRoll from "../content/SkillRoll"

const BASE_KEY = 'physical_'

const PhysicalSkills = () => {
    return (
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
    )
}

export default PhysicalSkills