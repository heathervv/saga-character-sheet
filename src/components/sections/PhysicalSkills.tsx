import { useEffect, useState } from "react"
import { useContentManagerContext } from '../../contexts/ContentManager/ContentManager'
import { SCORE_ID, updateRelatedScores } from '../../helpers/helpers'
import Skill from "../elements/Skill"
import SkillRoll from "../content/SkillRoll"
import TextArea from "../elements/TextArea"
import List from "../elements/List"
import WithTooltip from "../elements/WithTooltip"
import { getData, saveData } from '../../data/storageHelpers'

const BASE_KEY = 'physical_'

const slip = `${BASE_KEY}slip`
const flex = `${BASE_KEY}flex`
const endure = `${BASE_KEY}endure`
const resist = `${BASE_KEY}resist`
const force = `${BASE_KEY}force`
const wrestle = `${BASE_KEY}wrestle`

const allSkills = [slip, flex, endure, resist, force, wrestle]

const Values = {
    [slip]: 0,
    [flex]: 0,
    [endure]: 0,
    [resist]: 0,
    [force]: 0,
    [wrestle]: 0,
}

const Scores = {
    [SCORE_ID(slip)]: 0,
    [SCORE_ID(flex)]: 0,
    [SCORE_ID(endure)]: 0,
    [SCORE_ID(resist)]: 0,
    [SCORE_ID(force)]: 0,
    [SCORE_ID(wrestle)]: 0,
}

const relatedSkills: Record<string, string[]> = {
    [flex]: [SCORE_ID(slip), SCORE_ID(endure)],
    [resist]: [SCORE_ID(endure), SCORE_ID(force)],
    [wrestle]: [SCORE_ID(force), SCORE_ID(slip)],
}

const PhysicalSkills = () => {
    const { selectedCharacterId } = useContentManagerContext()
    const [values, setValues] = useState<typeof Values>(Values)
    const [scores, setScores] = useState<typeof Scores>(Scores)

    useEffect(() => {
        const data: Record<string, number> = {}
        const score: Record<string, number> = {}

        allSkills.forEach(id => {
            data[id] = getData<number>(id, selectedCharacterId) || 0
            score[SCORE_ID(id)] = getData<number>(SCORE_ID(id), selectedCharacterId) || 0
        })

        setValues(data as typeof Values)
        setScores(score as typeof Scores)
    }, [])

    const onValueChange = (id: string, newValue: number) => {
        const prevValue = values[id as keyof typeof values]

        saveData(id, newValue, selectedCharacterId)
        setValues({ ...values, [id]: newValue })

        if (relatedSkills[id]) {
            const updatedScores = updateRelatedScores(
                scores,
                newValue > prevValue,
                relatedSkills[id],
                selectedCharacterId,
            )

            setScores(updatedScores)
        }
    }

    const onScoreChange = (scoreId: string, newScore: number) => {
        saveData(scoreId, newScore, selectedCharacterId)
        setScores({ ...scores, [scoreId]: newScore })
    }

    return (
        <section>
            <section className="flex flex-row gap-2">
                <div className="flex flex-col gap-4 grow md:pr-6">
                    <Skill
                        id={slip}
                        name="Slip"
                        scoreId={SCORE_ID(slip)}
                        value={values?.[slip]}
                        score={scores?.[SCORE_ID(slip)]}
                        handleValueChange={onValueChange}
                        handleScoreChange={onScoreChange}
                    />
                    <Skill
                        id={flex}
                        name="Flex"
                        subtitle="(Slip/Endure)"
                        value={values?.[flex]}
                        score={scores?.[SCORE_ID(flex)]}
                        handleValueChange={onValueChange}
                        handleScoreChange={onScoreChange}
                    />
                    <Skill
                        id={endure}
                        name="Endure"
                        scoreId={SCORE_ID(endure)}
                        value={values?.[endure]}
                        score={scores?.[SCORE_ID(endure)]}
                        handleValueChange={onValueChange}
                        handleScoreChange={onScoreChange}
                    />
                    <Skill
                        id={resist}
                        name="Resist"
                        subtitle="(Endure/Force)"
                        value={values?.[resist]}
                        score={scores?.[SCORE_ID(resist)]}
                        handleValueChange={onValueChange}
                        handleScoreChange={onScoreChange}
                    />
                    <Skill
                        id={force}
                        name="Force"
                        scoreId={SCORE_ID(force)}
                        value={values?.[force]}
                        score={scores?.[SCORE_ID(force)]}
                        handleValueChange={onValueChange}
                        handleScoreChange={onScoreChange}
                    />
                    <Skill
                        id={wrestle}
                        name="Wrestle"
                        subtitle="(Force/Slip)"
                        scoreId={SCORE_ID(wrestle)}
                        value={values?.[wrestle]}
                        score={scores?.[SCORE_ID(wrestle)]}
                        handleValueChange={onValueChange}
                        handleScoreChange={onScoreChange}
                    />
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

export default PhysicalSkills