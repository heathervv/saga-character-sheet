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

export const handleSummaryClick = (index: number, handleToggle: (index: number) => void, e: React.MouseEvent<HTMLElement>) => {
    // Because there are interactive elements within the summary, we need to check if
    // the click is coming from an interactive child element and prevent the toggle if so.
    const target = e.target as HTMLElement
    const activeElement = document.activeElement as HTMLElement | null
    const clickedInteractiveChild = !!target.closest('input, textarea, select, button, a, [role="button"]')
    const keyboardClickFromFocusedChild = e.detail === 0 && !!activeElement && e.currentTarget.contains(activeElement)

    // The event is from typing in the input, actively supress it AND skip toggle behaviour
    if (keyboardClickFromFocusedChild) {
        e.preventDefault()
        return
    }

    // Event is from an interactive child, skip toggle behaviour
    if (clickedInteractiveChild) {
        return
    }

    handleToggle(index)
}