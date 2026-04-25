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

type LegacyNavigator = Navigator & {
    msSaveOrOpenBlob?: (blob: Blob, defaultName?: string) => boolean
}

export const exportToJson = (data: unknown, fileName = 'export'): void => {
    const filename = `${fileName}.json`
    const contentType = 'application/json;charset=utf-8;'
    const legacyNavigator = window.navigator as LegacyNavigator

    if (legacyNavigator.msSaveOrOpenBlob) {
        const blob = new Blob(
            [decodeURIComponent(encodeURI(JSON.stringify(data)))],
            { type: contentType }
        )

        legacyNavigator.msSaveOrOpenBlob(blob, filename)
    } else {
        const a = document.createElement('a')
        a.download = filename
        a.href =
            'data:' +
            contentType +
            ',' +
            encodeURIComponent(JSON.stringify(data))
        a.target = '_blank'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
}