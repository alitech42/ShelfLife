import { BookActions } from "../components/BookActions";
import { BookDescription } from "../components/BookDescription";
import { BookMeta } from "../components/BookMeta";
import { ReadingStats } from "../components/ReadingStats";

export function BookInfo() {
    return (
        <main className="flex flex-col h-full justify-between items-center p-4 gap-5 overflow-auto">
            <BookActions />
            <ReadingStats />
            <BookDescription />
            <BookMeta />
        </main>
    );
}
