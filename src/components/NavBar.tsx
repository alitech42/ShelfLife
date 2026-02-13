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
            <div className="flex flex-col sm:hidden">
                <button
                    className=" text-[#FDFEFE] text-4xl mb-3"
                    onClick={handleClick}
                >
                    ☰
                </button>
                <div
                    className={`${isOpen ? "max-h-96" : "max-h-0"} overflow-hidden transition-[max-height] duration-400 flex flex-col text-[#FDFEFE] gap-9 text-3xl sm:hidden p-3`}
                >
                    <NavLinks />
                </div>
            </div>

            <div className=" text-[#FDFEFE] sm:flex flex-row gap-9 text-3xl hidden">
                <NavLinks />
            </div>
        </nav>
    );
}
