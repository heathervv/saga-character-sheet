import { saveData } from '../data/storageHelpers'

export const SCORE_ID = (requestedId: string): string => `${requestedId}_score`

export const updateRelatedScores = (
    scores: Record<string, number>,
    isIncreasing: boolean,
    relatedSkills: string[],
    selectedCharacterId?: string
) => {
    const updatedScores = { ...scores }

    relatedSkills.forEach(scoreId => {
        const changeValue = isIncreasing ? 1 : -1
        const relatedScore = scores[scoreId]
        const newRelatedScore = relatedScore + changeValue
        const normalizedScore = newRelatedScore >= 0 ? newRelatedScore : 0

        saveData(scoreId, normalizedScore, selectedCharacterId)
        updatedScores[scoreId] = normalizedScore
    })

    return updatedScores
}

export const updateEquivalentScore = (
    scoreId: string,
    scores: Record<string, number>,
    isIncreasing: boolean,
    selectedCharacterId?: string
) => {
    const updatedScores = { ...scores }

    const changeValue = isIncreasing ? 2 : -2
    const relatedScore = scores[scoreId]
    const newRelatedScore = relatedScore + changeValue
    const normalizedScore = newRelatedScore >= 0 ? newRelatedScore : 0

    saveData(scoreId, normalizedScore, selectedCharacterId)
    updatedScores[scoreId] = normalizedScore

    return updatedScores
}