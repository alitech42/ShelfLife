import { useEffect, useState } from "react";
import { BookActions } from "../components/BookActions";
import { BookDescription } from "../components/BookDescription";
import { BookMeta } from "../components/BookMeta";
import { ReadingStats } from "../components/ReadingStats";
import { useParams } from "react-router";
import type { BookDetails } from "../types";

export function BookInfo() {
    const [bookDetails, setBookDetails] = useState<BookDetails>();
    const description = bookDetails ? bookDetails.description : "";
    const cover = bookDetails?.covers?.[0]
        ? `https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-M.jpg`
        : "";
    const title = bookDetails ? bookDetails.title : ''

    const { olid } = useParams();

    useEffect(() => {
        async function getData() {
            const response = await fetch(
                `https://openlibrary.org/works/${olid}.json`
            );
            const data = await response.json();

            setBookDetails(data);
        }
        getData();
    }, [olid]);

    return (
        <main className="flex flex-col h-full justify-between items-center p-4 gap-5 overflow-auto">
            <BookActions title={title} cover={cover}/>
            <ReadingStats />
            <BookDescription description={description}/>
            <BookMeta />
        </main>
    );
}
