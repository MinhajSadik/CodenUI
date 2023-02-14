
export function upperCaseName(name) {
    return name.split(" ").map((name) => name[0]).join('').toUpperCase()
}