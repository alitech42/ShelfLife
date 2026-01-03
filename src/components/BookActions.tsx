type BookActionsProps = {
    title: string;
    cover: string;
};

export function BookActions({ title, cover }: BookActionsProps) {
    return (
        <div className="flex flex-col border rounded-2xl gap-6 p-4 sm:row-end-2 sm:col-end-1">
            { cover !== "" ? <img src={cover} alt={title} /> : <h1>{title}</h1>}
            <button className=" border rounded-2xl">Add to List</button>
            <label>
                Your rating: <input type="number" min={0} max={10} />
            </label>
        </div>
    );
}
