import { useEffect, useState } from "react";
import { BookActions } from "../components/BookActions";
import { BookDescription } from "../components/BookDescription";
import { BookMeta } from "../components/BookMeta";
import { ReadingStats } from "../components/ReadingStats";
import { useParams } from "react-router";
import type { BookDetails } from "../types";

export function BookInfo() {
    const [bookDetails, setBookDetails] = useState<BookDetails>();
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const description =
        typeof bookDetails?.description === "string"
            ? bookDetails.description
            : bookDetails?.description?.value ?? "";
    const cover = bookDetails?.covers?.[0]
        ? `https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-M.jpg`
        : "";
    const title = bookDetails ? bookDetails.title : "";

    const { olid } = useParams();

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        async function getData() {
            try {
                const response = await fetch(
                    `https://openlibrary.org/works/${olid}.json`
                );
                const data = await response.json();

                if (!response.ok) {
                    throw new Error("Failed to fetch book data");
                }

                setBookDetails(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [olid]);

    return (
        <main className="flex flex-col h-full justify-between items-center p-4 gap-5 overflow-auto sm:flex-row">
            <BookActions
                title={
                    title !== "" && !isLoading && !error
                        ? title
                        : isLoading
                        ? "Loading"
                        : "An error happened"
                }
                cover={
                    cover !== "" && !isLoading && !error
                        ? cover
                        : isLoading
                        ? "Loading"
                        : "An error happened"
                }
            />
            <div className="flex flex-col gap-5">
                <ReadingStats />
                <BookDescription
                    description={
                        !isLoading && !error
                            ? description
                            : isLoading
                            ? "Loading"
                            : "An error happened"
                    }
                />
                <BookMeta />
            </div>
        </main>
    );
}
