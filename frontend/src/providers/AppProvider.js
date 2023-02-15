import { useRouter } from 'next/router'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findCategories, findCategoryByName } from '../../redux/feature/categorySlice'
import { findProducts } from '../../redux/feature/productSlice'
import { AppContext } from '../contexts/contexts'
import { useAutoRefresh } from '../hooks/useAutoRefresh'
import { removeUnused } from '../utils/removeUnused'

function AppProvider({ children }) {
    const router = useRouter()
    const dispatch = useDispatch()
    const { pathname: route } = router
    const { loading } = useAutoRefresh()
    const [open, setOpen] = useState(false)
    const [opened, setOpened] = useState(false)
    const [otpOpen, setOtpOpen] = useState(false)
    const [forgotOpen, setForgotOpen] = useState(false)
    const [newPassOpen, setNewPassOpen] = useState(false)
    const [successOpen, setSuccessOpen] = useState(false)

    const { loggedIn, loading: appLoading, user, verified, forgotten, newPassword, products, categories } = useSelector((state) => ({
        ...state.user,
        ...state.product,
        ...state.category,
        ...state.user.otp
    }))

    useEffect(() => {
        if (loggedIn) {
            setOpen(false)
            setOpened(false)
        }
        // else setOpen(true)
        dispatch(findCategories())
        dispatch(findProducts())
        dispatch(findCategoryByName(removeUnused(route, "/")))
    }, [loggedIn])

    function handleOpenForgot() {
        setOpen(false)
        setOpened(false)
        setForgotOpen(true)
    }

    function handleCloseForgot() {
        if (forgotten) {
            setForgotOpen(false)
            setOtpOpen(true)
        }
    }

    function handleCloseOtp() {
        if (forgotten && verified) {
            setOtpOpen(false)
            setNewPassOpen(true)
        }
    }

    function handleCloseNewPassword() {
        // if (forgotten && verified && newPassword) {
        if (newPassword) {
            setNewPassOpen(false)
            setSuccessOpen(true)
        }
    }

    useEffect(() => {
        handleCloseForgot()
        handleCloseOtp()
        handleCloseNewPassword()
    }, [forgotten, verified, newPassword])



    function handleOpen() {
        setOpen(true)
        setForgotOpen(false)
        setOtpOpen(false)
        setNewPassOpen(false)
        setSuccessOpen(false)
    }

    function handleClose() {
        setOpen(false)
        setOpened(false)
    }

    function handleSwitch() {
        setOpen((prevOpen) => !prevOpen)
        setOpened((prevOpened) => !prevOpened)
    }

    const appInfo = {
        user,
        open,
        route,
        router,
        otpOpen,
        opened,
        loading,
        loggedIn,
        products,
        handleOpen,
        categories,
        forgotOpen,
        appLoading,
        newPassOpen,
        handleClose,
        successOpen,
        handleSwitch,
        handleCloseOtp,
        handleOpenForgot,
        handleCloseForgot,
        handleCloseNewPassword,
    }
    return (
        <AppContext.Provider value={appInfo}>
            {children}
        </AppContext.Provider>
    )
}


export default memo(AppProvider)