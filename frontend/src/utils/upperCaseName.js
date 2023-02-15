
export function upperCaseName(name) {
    return name?.split(" ").map((name) => name).join('').toUpperCase()
}