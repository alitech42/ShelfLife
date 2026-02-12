import { Link } from "react-router";

export function NavLinks() {
    return (
        <>
            <Link
                to={"/home"}
                className=" transition-all hover:bg-[#C0392B] p-2 hover:scale-110"
            >
                Home
            </Link>
            <Link
                to={"/list"}
                className=" transition-all hover:bg-[#C0392B] p-2 hover:scale-110"
            >
                List
            </Link>
            <Link
                to={"/stats"}
                className=" transition-all hover:bg-[#C0392B] p-2 hover:scale-110"
            >
                Stats
            </Link>
        </>
    );
}
