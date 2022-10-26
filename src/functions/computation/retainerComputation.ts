export const getRetainersQuantity = (roofWidth: number, rows: number):number => {
    return (Math.round(roofWidth / 3) + (roofWidth % 3 === 1 ? 1 : 0)) * rows
}