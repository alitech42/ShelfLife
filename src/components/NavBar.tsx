import { Link } from "react-router";

export function NavBar() {
    return (
        <nav>
            <Link to={'/home'}>Home</Link>
            <Link to={'/list'}>List</Link>
            <Link to={'/stats'}>Stats</Link>
        </nav>
    )
}