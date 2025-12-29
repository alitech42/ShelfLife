import React, { useEffect, useState } from "react";
import type { book } from "../types";
import { QueryResults } from "../components/QueryResults";

export function Home() {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState<book[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    function handleQuery(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
    }

    useEffect(() => {
        if (!query) {
            setBooks([]);
            setError(null);
            return;
        }

        const controller = new AbortController();

        const timeoutID = setTimeout(() => {
            async function getBooks() {
                setError(null);
                setIsLoading(true);

                try {
                    const response = await fetch(
                        `https://openlibrary.org/search.json?q=${encodeURIComponent(
                            query
                        )}&sort=rating`,
                        { signal: controller.signal }
                    );
                    if (!response.ok) throw new Error("Failed to search");
                    const data = await response.json();
                    setBooks(data.docs);
                } catch (err: any) {
                    if (err.name !== "AbortError") setError(err.message);
                } finally {
                    setIsLoading(false);
                }
            }

            getBooks();
        }, 1000);

        return () => {
            clearTimeout(timeoutID);
            controller.abort();
        };
    }, [query]);

    useEffect(() => console.log(books), [books]);

    return (
        <main className="flex-6 flex flex-col items-center p-5 bg-[#FDFEFE]">
            <h1 className=" flex justify-center items-center text-7xl w-full flex-1">
                What have you read today?
            </h1>
            <div className="flex flex-2 flex-col justify-center items-center w-full gap-4">
                <input
                    type="text"
                    placeholder="Search books here"
                    className="border border-solid rounded-2xl p-2 w-[60%]"
                    value={query}
                    onChange={(e) => handleQuery(e)}
                />
                {isLoading && <p>Searching...</p>}
                {!isLoading && error && <p>An error happened during search</p>}
                {!isLoading && !error && books.length === 0 && query && (
                    <p>No results found</p>
                )}
                {!isLoading && !error && books.length > 0 && query && (
                    <QueryResults data={books} />
                )}
            </div>
        </main>
    );
}
