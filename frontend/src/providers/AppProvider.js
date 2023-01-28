import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppContext } from '../contexts/contexts'

export default function AppProvider({ children }) {
    const dispatch = useDispatch()
    const { loggedIn, user } = useSelector((state) => state.user)

    const { pathname: route } = useRouter()
    const [open, setOpen] = useState(false)
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        if (loggedIn) {
            setOpen(false)
            setOpened(false)
        }
        // else setOpen(true)
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
        user,
        open,
        route,
        opened,
        setOpen,
        dispatch,
        loggedIn,
        setOpened,
        handleOpen,
        handleClose,
        handleSwitch,
    }
    return (
        <AppContext.Provider value={toggleInfo}>
            {children}
        </AppContext.Provider>
    )
}
