import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/contexts"

export default function withRouter(Component) {
    return (props) => {
        const { loggedIn, router } = useContext(AppContext)

        if (typeof window !== 'undefined') {
            useEffect(() => {
                if (!loggedIn) {
                    router.push("/")
                }
            }, [loggedIn])
        }


        return <Component {...props} />

    }
}

