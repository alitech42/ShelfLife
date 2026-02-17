import { Link } from "react-router";

type BookListItemProps = {
    title: string;
    cover?: string;
    olid: string;
    rating: string;
};

export function BookListItem({
    title,
    cover,
    olid,
    rating,
}: BookListItemProps) {
    return (
        <Link to={`/works/${olid}`}>
            <div className=" border border-solid border-black rounded-3xl p-3 hover:bg-green-900 hover:text-white transition-colors flex flex-row gap-4 items-center">
                {cover && (
                    <img src={cover ? cover : ""} alt="" className=" w-15" />
                )}
                <div className="flex flex-col gap-3">
                    <h1>{title}</h1>
                    <p>Your Rating: {rating}/10</p>
                </div>
            </div>
        </Link>
    );
}
