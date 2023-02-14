
export function removeUnused(text, sign) {
    return text.split(sign).map((name) => name).join("")
}