import { NavBar } from "./NavBar";

export function Header() {
    return (
        <header className=" bg-[#145A32] flex flex-row justify-between items-center p-5 flex-1">
            <h1 className=" text-[#FDFEFE] text-5xl">ShelfLife</h1>
            <NavBar />
        </header>
    )
}