import { useCallback, useEffect, useState } from "react"

export const useCopyToClipboard = (text, notifyTimeout = 2500) => {
    const [copyStatus, setCopyStatus] = useState('inactive')

    // Wrap `copy()` in `useCallback()` just in case.
    // It becomes a "stable" reference like `setCopyStatus()`
    const copy = useCallback(() => {
        navigator.clipboard.writeText(text).then(
            () => setCopyStatus('copied'),
            () => setCopyStatus('failed'),
        )
    }, [text])

    // reset the copy status after the `notifyTimeout` is finished
    useEffect(() => {
        if (copyStatus === 'inactive') {
            return
        }

        const timeoutId = setTimeout(() => setCopyStatus('inactive'), notifyTimeout)

        return () => clearTimeout(timeoutId)
    }, [copyStatus])

    return [copyStatus, copy]
}