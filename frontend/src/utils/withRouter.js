import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/contexts"

export default function withRouter(Component) {
    return (props) => {
        const { loggedIn, setOpen, router } = useContext(AppContext)

        if (typeof window !== 'undefined') {
            useEffect(() => {
                if (!loggedIn) {
                    setOpen(true)
                    router.push("/")

                } else {
                    return <Component {...props} />
                }

            }, [loggedIn])
        }


        return null
    }
}

