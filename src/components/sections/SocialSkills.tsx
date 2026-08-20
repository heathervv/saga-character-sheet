import { useEffect, useState } from "react"
import { useContentManagerContext } from '../../contexts/ContentManager/ContentManager'
import { SCORE_ID, updateRelatedScores, updateEquivalentScore } from '../../helpers/helpers'
import Skill from "../elements/Skill"
import SkillRoll from "../content/SkillRoll"
import TextArea from "../elements/TextArea"
import List from "../elements/List"
import WithTooltip from "../elements/WithTooltip"
import { getData, saveData } from '../../data/storageHelpers'

const BASE_KEY = 'social_'

const charm = `${BASE_KEY}charm`
const advise = `${BASE_KEY}advise`
const intuit = `${BASE_KEY}intuit`
const improvise = `${BASE_KEY}improvise`
const intellect = `${BASE_KEY}intellect`
const deceive = `${BASE_KEY}deceive`

const allSkills = [charm, advise, intuit, improvise, intellect, deceive]

const Values = {
    [charm]: 0,
    [advise]: 0,
    [intuit]: 0,
    [improvise]: 0,
    [intellect]: 0,
    [deceive]: 0,
}

const Scores = {
    [SCORE_ID(charm)]: 0,
    [SCORE_ID(advise)]: 0,
    [SCORE_ID(intuit)]: 0,
    [SCORE_ID(improvise)]: 0,
    [SCORE_ID(intellect)]: 0,
    [SCORE_ID(deceive)]: 0,
}

const relatedSkills: Record<string, string[]> = {
    [advise]: [SCORE_ID(charm), SCORE_ID(intuit)],
    [improvise]: [SCORE_ID(intuit), SCORE_ID(intellect)],
    [deceive]: [SCORE_ID(intellect), SCORE_ID(charm)],
}

const SocialSkills = () => {
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
        } else {
            const updatedScores = updateEquivalentScore(
                SCORE_ID(id),
                scores,
                newValue > prevValue,
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
                        id={charm}
                        name="Charm"
                        scoreId={SCORE_ID(charm)}
                        value={values?.[charm]}
                        score={scores?.[SCORE_ID(charm)]}
                        handleValueChange={onValueChange}
                        handleScoreChange={onScoreChange}
                    />
                    <Skill
                        id={advise}
                        name="Advise"
                        subtitle="(Charm/Intuit)"
                        value={values?.[advise]}
                        score={scores?.[SCORE_ID(advise)]}
                        handleValueChange={onValueChange}
                        handleScoreChange={onScoreChange}
                    />
                    <Skill
                        id={intuit}
                        name="Intuit"
                        scoreId={SCORE_ID(intuit)}
                        value={values?.[intuit]}
                        score={scores?.[SCORE_ID(intuit)]}
                        handleValueChange={onValueChange}
                        handleScoreChange={onScoreChange}
                    />
                    <Skill
                        id={improvise}
                        name="Improvise"
                        subtitle="(Intuit/Intellect)"
                        value={values?.[improvise]}
                        score={scores?.[SCORE_ID(improvise)]}
                        handleValueChange={onValueChange}
                        handleScoreChange={onScoreChange}
                    />
                    <Skill
                        id={intellect}
                        name="Intellect"
                        scoreId={SCORE_ID(intellect)}
                        value={values?.[intellect]}
                        score={scores?.[SCORE_ID(intellect)]}
                        handleValueChange={onValueChange}
                        handleScoreChange={onScoreChange}
                    />
                    <Skill
                        id={deceive}
                        name="Deceive"
                        subtitle="(Intellect/Charm)"
                        value={values?.[deceive]}
                        score={scores?.[SCORE_ID(deceive)]}
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

export default SocialSkills