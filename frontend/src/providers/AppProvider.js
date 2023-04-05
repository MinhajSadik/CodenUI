import { useRouter } from 'next/router'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allCategories, findCategoryByName } from '../../redux/feature/categorySlice'
import { allProducts } from '../../redux/feature/productSlice'
import { allTeches } from '../../redux/feature/techSlice'
import { clearError, clearSuccess, countUser } from '../../redux/feature/userSlice'
import { AppContext } from '../contexts/contexts'
import { useAutoRefresh } from '../hooks/useAutoRefresh'
import { removeUnused } from '../utils/removeUnused'

function AppProvider({ children }) {
    let { error, success } = useSelector((state) => state.user);
    const { teches, loggedIn, loading: appLoading, user, users, verified, forgotten, newPassword, products, categories } = useSelector((state) => ({
        ...state.product,
        ...state.category,
        ...state.user.otp,
        ...state.user,
        ...state.tech
    }))
    const router = useRouter()
    const dispatch = useDispatch()
    const { pathname: route } = router
    const { loading } = useAutoRefresh()
    const [open, setOpen] = useState(false)
    const [opened, setOpened] = useState(false)
    const [otpOpen, setOtpOpen] = useState(false)
    const [showError, setShowError] = useState(true)
    const [showSuccess, setShowSuccess] = useState(true)
    const [forgotOpen, setForgotOpen] = useState(false)
    const [newPassOpen, setNewPassOpen] = useState(false)
    const [successOpen, setSuccessOpen] = useState(false)



    useEffect(() => {
        error && handleOpen();
        const timeoutId = setTimeout(() => {
            if (error) {
                setShowError(false)
                setShowSuccess(true)
                dispatch(clearError())
            }
            if (success) {
                setShowSuccess(false)
                setShowError(true)
                dispatch(clearSuccess())
            }
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [error, success, showError, showSuccess]);

    useEffect(() => {
        if (loggedIn) {
            setOpen(false)
            setOpened(false)
        }


    }, [loggedIn, route])

    useEffect(() => {
        dispatch(allCategories())
        dispatch(allProducts())
        dispatch(countUser())
        dispatch(allTeches())

        if (route !== '/') {
            dispatch(findCategoryByName(removeUnused(route, "/")))
        }
    }, [])



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
        setForgotOpen(false)
        setOtpOpen(false)
        setNewPassOpen(false)
        setSuccessOpen(false)
    }

    function handleSwitch() {
        setOpen((prevOpen) => !prevOpen)
        setOpened((prevOpened) => !prevOpened)
    }

    const appInfo = {
        user,
        users,
        error,
        success,
        showError,
        showSuccess,
        teches,
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