export const IsStringNumber = (s: string): boolean => {
    const numbers = "0123456789."

    const separatorCount = s.split("").filter(char => char === ".").length

    if (separatorCount > 1)
        return false;

    return s.split("").every(char => numbers.includes(char))
}

