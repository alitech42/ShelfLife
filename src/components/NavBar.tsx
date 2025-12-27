import { Link } from "react-router";

export function NavBar() {
    return (
        <nav className=" text-[#FDFEFE] sm:flex flex-row gap-9 text-3xl hidden">
            <Link to={'/home'} className=" transition-all hover:bg-[#C0392B] p-2 hover:scale-110">Home</Link>
            <Link to={'/list'} className=" transition-all hover:bg-[#C0392B] p-2 hover:scale-110">List</Link>
            <Link to={'/stats'} className=" transition-all hover:bg-[#C0392B] p-2 hover:scale-110">Stats</Link>
        </nav>
    )
}