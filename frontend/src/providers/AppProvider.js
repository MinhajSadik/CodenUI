import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findCategories } from '../../redux/feature/categorySlice'
import { findProducts } from '../../redux/feature/productSlice'
import { AppContext } from '../contexts/contexts'
import { useAutoRefresh } from '../hooks/useAutoRefresh'

export default function AppProvider({ children }) {
    const { loading } = useAutoRefresh()
    const dispatch = useDispatch()

    const { loggedIn, user, products, categories } = useSelector((state) => ({
        ...state.user,
        ...state.product,
        ...state.category
    }))
    const router = useRouter()
    const { pathname: route } = router
    const [open, setOpen] = useState(false)
    const [opened, setOpened] = useState(false)
    const [forgotOpen, setForgotOpen] = useState(false)
    const [otpOpen, setOtpOpen] = useState(false)


    useEffect(() => {
        if (loggedIn) {
            setOpen(false)
            setOpened(false)
        }
        // else setOpen(true)
        dispatch(findCategories())
        dispatch(findProducts())
    }, [loggedIn])

    // function handleOtp() {
    //     setOtpOpen(true)
    // }

    function handleForgotOpen() {
        setOpen(false)
        setOpened(false)
        setForgotOpen(true)
    }

    function handleForgotClose() {
        setForgotOpen(false)
        setOtpOpen(true)
    }

    function handleOpen() {
        setOpen(true)
        setForgotOpen(false)
        setOtpOpen(false)
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
        router,
        forgotOpen,
        otpOpen,
        opened,
        loading,
        loggedIn,
        products,
        categories,
        handleForgotOpen,
        handleForgotClose,
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
