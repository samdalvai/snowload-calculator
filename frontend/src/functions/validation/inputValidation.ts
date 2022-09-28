export const IsStringNumber = (string: string): boolean => {
    const numbers = "0123456789"

    return string.split("").every(char => numbers.includes(char))
}