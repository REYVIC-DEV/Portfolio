import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <h1>this is the homepage</h1>
            <Link to="/page2">go to page 2</Link>
        </>
    )
}