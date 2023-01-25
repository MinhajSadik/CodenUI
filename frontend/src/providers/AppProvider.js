import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppContext } from '../contexts/contexts'

export default function AppProvider({ children }) {
    const { loggedIn } = useSelector((state) => state.user)

    const { pathname: route } = useRouter()
    const [open, setOpen] = useState(false)
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        if (loggedIn) {
            setOpen(false)
            setOpened(false)
        }
    }, [loggedIn])

    function handleOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
        setOpened(false)
    }

    function handleSwitch() {
        setOpen((prevOpen) => !prevOpen)
        setOpened((prevOpened) => !prevOpened)
    }

    const toggleInfo = {
        open,
        opened,
        setOpen,
        setOpened,
        handleOpen,
        handleClose,
        handleSwitch,
        route,
        loggedIn
    }
    return (
        <AppContext.Provider value={toggleInfo}>
            {children}
        </AppContext.Provider>
    )
}
