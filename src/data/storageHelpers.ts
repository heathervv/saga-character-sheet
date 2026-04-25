export const getData = <T>(storageKey: string, characterId?: string): T | undefined => {
    if (!characterId) {
        return undefined
    }
    
    const savedData = localStorage.getItem(`${characterId}_${storageKey}`)
    return savedData ? JSON.parse(savedData) as T : undefined
}

export const saveData = <T>(storageKey: string, data: T, characterId?: string): void => {
    if (!characterId) {
        console.warn('No character ID supplied. Unable to save data.')
        return
    }

    localStorage.setItem(`${characterId}_${storageKey}`, JSON.stringify(data))
}