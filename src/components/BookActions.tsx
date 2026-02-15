import { saveToLocalStorage } from "../utilities";
import type { listData } from "../types";
import { useState, useEffect } from "react";

type BookActionsProps = {
    title: string;
    cover: string;
    olid: string;
};

export function BookActions({ title, cover, olid }: BookActionsProps) {
    const [list, setList] = useState<listData[]>(() => {
        const stored = localStorage.getItem("data");
        return stored ? JSON.parse(stored) : [];
    });

    const isAdded = list.some((book: listData) => book.olid === olid);
    useEffect(() => console.log(list), []);

    function handleClick() {
        saveToLocalStorage(title, cover, olid);
        setList(JSON.parse(localStorage.getItem("data") ?? "[]"));
    }

    return (
        <div className="flex flex-col border rounded-2xl gap-6 p-4 sm:shrink-0">
            {cover !== "" ? <img src={cover} alt={title} /> : <h1>{title}</h1>}
            {isAdded ? (
                <button className=" border rounded-2xl bg-green-900 text-white scale-105">
                    On the List
                </button>
            ) : (
                <button
                    className=" border rounded-2xl hover:bg-green-900 hover:text-white hover:scale-105 transition-all"
                    onClick={handleClick}
                >
                    Add to List
                </button>
            )}

            <label>
                Your rating: <input type="number" min={0} max={10} />
            </label>
        </div>
    );
}
