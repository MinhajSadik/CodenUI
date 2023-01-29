import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/contexts"

export default function withRouter(Component) {
    return (props) => {
        const { loggedIn, setOpen, router } = useContext(AppContext)
        const { pathname: route } = router

        if (typeof window !== 'undefined') {
            useEffect(() => {
                if (!loggedIn) {
                    setOpen(true)
                    router.push(-1)
                }
            }, [loggedIn])
        }


        return <Component {...props} />
    }
}

