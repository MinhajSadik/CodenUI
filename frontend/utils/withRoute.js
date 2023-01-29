import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import { AppContext } from "../src/contexts/contexts"

export default function withRoute(Component) {
    return (props) => {
        const router = useRouter()
        const { loggedIn, loading, setOpen } = useContext(AppContext)

        useEffect(() => {
            if (!loggedIn) {
                router.push('/')
                setOpen((prevOpen) => !prevOpen)
            }
        }, [loggedIn])

        return <Component {...props} />
    }

    // withRouter.pageProps = async (ctx) => {
    //     const componentInitialProps = Component.pageProps
    //         ? await Component.pageProps(ctx)
    //         : {};

    //     return { ...componentInitialProps };
    // };

    // return withRouter;
}

