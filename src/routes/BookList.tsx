import { BookListItem } from "../components/BookListItem";
import type { listData } from "../types";

export function BookList() {
    const listBooks: listData[] = JSON.parse(
        localStorage.getItem("data") || "[]",
    );

    return (
        <main className="flex-6 flex flex-col gap-3  p-5 bg-[#FDFEFE]">
            {listBooks.map((listBook) => (
                <BookListItem
                    title={listBook.title}
                    cover={listBook.cover}
                    olid={listBook.olid}
                    rating={listBook.rating}
                    key={crypto.randomUUID()}
                />
            ))}
        </main>
    );
}
