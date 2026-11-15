export const runAnyMigrations = (characterId: string): void => {
    const deprecatedRapport = localStorage.getItem(`${characterId}_character_rapport`)

    // No content to migrate, abort.
    if (!deprecatedRapport) {
        return
    }

    const rapportList = localStorage.getItem(`${characterId}_character_rapport_list`)

    // New key is already populated, don't overwrite it
    if (rapportList) {
        return
    }

    // Run migration in place
    const newRapport = [{ name: 'Rapport', notes: JSON.parse(deprecatedRapport) }]
    localStorage.setItem(`${characterId}_character_rapport_list`, JSON.stringify(newRapport))
    localStorage.removeItem(`${characterId}_character_rapport`)
}