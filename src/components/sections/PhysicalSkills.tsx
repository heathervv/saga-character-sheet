import Skill from "../elements/Skill"

const BASE_KEY = 'physical_'

const PhysicalSkills = () => {
    return (
        <section>
            <div className="flex flex-col gap-4">
                <Skill id={`${BASE_KEY}slip`} name="Slip" />
                <Skill id={`${BASE_KEY}flex`} name="Flex" subtitle="(Slip/Endure)" />
                <Skill id={`${BASE_KEY}endure`} name="Endure" />
                <Skill id={`${BASE_KEY}resist`} name="Resist" subtitle="(Endure/Force)" />
                <Skill id={`${BASE_KEY}force`} name="Force" />
                <Skill id={`${BASE_KEY}wrestle`} name="Wrestle" subtitle="(Force/Slip)" />
            </div>
        </section>
    )
}

export default PhysicalSkills