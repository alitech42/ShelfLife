import React, { useEffect, useState } from "react";
import type { book } from "../types";

export function Home() {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState<book[]>([])

    function handleQuery(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
    }

    useEffect(() => {
        async function getBooks(query: string) {
            const response = await fetch(
                `https://openlibrary.org/search.json?q=${encodeURIComponent(
                    query
                )}`
            );
            const data = await response.json();

            setBooks(data.docs)
        }
        const timeoutID = setTimeout(() => {
            getBooks(query);
        }, 1000);

        return () => clearTimeout(timeoutID);
    }, [query]);

    useEffect(() => console.log(books), [books])

    return (
        <main className="flex-6 flex flex-col items-center p-5 bg-[#FDFEFE]">
            <h1 className=" flex justify-center items-center text-7xl w-full flex-1">
                What have you read today?
            </h1>
            <div className="flex flex-2 flex-col justify-center items-center w-full">
                <input
                    type="text"
                    placeholder="Search books here"
                    className="border border-solid rounded-2xl p-2 w-[60%]"
                    value={query}
                    onChange={(e) => handleQuery(e)}
                />
            </div>
        </main>
    );
}
