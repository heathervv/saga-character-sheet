export const getData = <T>(storageKey: string): T | undefined => {
    const savedData = localStorage.getItem(storageKey)
    return savedData ? JSON.parse(savedData) as T : undefined
}

export const saveData = <T>(storageKey: string, data: T): void => {
    localStorage.setItem(storageKey, JSON.stringify(data))
}