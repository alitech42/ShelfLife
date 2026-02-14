import { Link } from "react-router";

export function BookListItem({ title, olid }: { title: string; olid: string }) {
    return (
        <Link to={`/works/${olid}`}>
            <div className=" border border-solid border-black rounded-3xl p-3 hover:bg-green-900 hover:text-white transition-colors">
                <h1>{title}</h1>
            </div>
        </Link>
    );
}
