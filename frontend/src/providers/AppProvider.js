import { useRouter } from 'next/router'
import React from 'react'
import { AppContext } from '../contexts/contexts'

export default function AppProvider({ children }) {
    const { pathname: route } = useRouter()
    const [open, setOpen] = React.useState(false)
    const [opened, setOpened] = React.useState(false)

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
        route
    }
    return (
        <AppContext.Provider value={toggleInfo}>
            {children}
        </AppContext.Provider>
    )
}
