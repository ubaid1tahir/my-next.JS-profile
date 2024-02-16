import Home from "../../home"



function home() {
    if(!process.env.NEXT_PUBLIC_SITE_URL) {
        return null;
    }
    return (
        <>
            <Home />
        </>
    )
}

export default home
