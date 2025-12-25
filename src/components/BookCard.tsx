type BookCardProps = {
    title: string;
    author?: string;
};

export function BookCard({ title, author }: BookCardProps) {
    return (
        <div className=" p-3 border rounded-2xl ">
            <p className=" font-bold">{title}</p>
            {author && <p className=" font-extralight">by {author}</p>}
        </div>
    );
}
