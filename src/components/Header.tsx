import { NavBar } from "./NavBar";
import { Link } from "react-router";

export function Header() {
    return (
        <header className=" bg-[#145A32] flex flex-row justify-between items-center p-5 flex-1">
            <Link to={"/home"}>
                <h1 className=" text-[#FDFEFE] text-5xl">ShelfLife</h1>
            </Link>
            <NavBar />
        </header>
    );
}
