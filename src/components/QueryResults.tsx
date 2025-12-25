import type { book } from "../types";
import { BookCard } from "./BookCard";

type QueryResultsProps = {
    data: book[];
};

export function QueryResults({ data }: QueryResultsProps) {
    return (
        <div className=" shadow-xl rounded-2xl w-[50%] border border-solid p-4 flex flex-col gap-5 overflow-hidden h-96">
            {data.map(({ title, author_name }) => (
                <BookCard
                    title={title}
                    author={author_name && author_name[0]}
                    key={crypto.randomUUID()}
                />
            ))}
        </div>
    );
}
