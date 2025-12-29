import { Link } from "react-router";

type BookCardProps = {
    title: string;
    bookRoute: string
    author?: string;
};

export function BookCard({ title, author, bookRoute }: BookCardProps) {
    return (
        <Link to={bookRoute}>
            <div className=" p-3 border rounded-2xl ">
                <p className=" font-bold">{title}</p>
                {author && <p className=" font-extralight">by {author}</p>}
            </div>
        </Link>
    );
}
