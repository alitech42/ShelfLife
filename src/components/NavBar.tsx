import { useEffect, useState } from "react";
import { NavLinks } from "./NavLinks";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen((prev) => !prev);
    }

    useEffect(() => console.log(isOpen), [isOpen]);

    return (
        <nav>
            <div>
                <button
                    className=" text-[#FDFEFE] text-4xl sm:hidden mb-3"
                    onClick={handleClick}
                >
                    ☰
                </button>
                <div className={`${isOpen ? "flex" : "hidden"} flex-col text-[#FDFEFE] gap-9 text-3xl sm:hidden p-3`}>
                    <NavLinks />
                </div>
            </div>

            <div className=" text-[#FDFEFE] sm:flex flex-row gap-9 text-3xl hidden">
                <NavLinks />
            </div>
        </nav>
    );
}
