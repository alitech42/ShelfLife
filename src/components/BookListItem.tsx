import { Link } from "react-router";

type BookListItemProps = {
    title: string;
    cover?: string;
    olid: string;
};

export function BookListItem({ title, cover, olid }: BookListItemProps) {
    return (
        <Link to={`/works/${olid}`}>
            <div className=" border border-solid border-black rounded-3xl p-3 hover:bg-green-900 hover:text-white transition-colors flex flex-row gap-4 items-center">
                {cover && <img src={cover ? cover : ''} alt='' className=" w-15"/>}
                <h1>{title}</h1>
            </div>
        </Link>
    );
}
