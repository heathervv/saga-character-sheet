import Skill from "../elements/Skill"

const BASE_KEY = 'social_'

const SocialSkills = () => {
    return (
        <section>
            <div className="flex flex-col gap-4">
                <Skill id={`${BASE_KEY}charm`} name="Charm" />
                <Skill id={`${BASE_KEY}advise`} name="Advise" subtitle="(Charm/Intuit)" />
                <Skill id={`${BASE_KEY}intuit`} name="Intuit" />
                <Skill id={`${BASE_KEY}improvise`} name="Improvise" subtitle="(Intuit/Intellect)" />
                <Skill id={`${BASE_KEY}intellect`} name="Intellect" />
                <Skill id={`${BASE_KEY}deceive`} name="Deceive" subtitle="(Intellect/Charm)" />
            </div>
        </section>
    )
}

export default SocialSkills