

export const upperCaseWords = (string) =>
    string.replace(/^(.)|\s+(.)/g, character =>
        character.toUpperCase());