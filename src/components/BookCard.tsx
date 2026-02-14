import { Link } from "react-router";

type BookCardProps = {
    title: string;
    bookRoute: string;
    author?: string;
};

export function BookCard({ title, author, bookRoute }: BookCardProps) {
    return (
        <Link to={bookRoute}>
            <div className=" p-3 border rounded-2xl hover:bg-green-900 hover:text-white transition-colors">
                <p className=" font-bold">{title}</p>
                {author && <p className=" font-extralight">by {author}</p>}
            </div>
        </Link>
    );
}
