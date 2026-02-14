import { saveToLocalStorage } from "../utilities";

type BookActionsProps = {
    title: string;
    cover: string;
    olid: string
};

export function BookActions({ title, cover, olid }: BookActionsProps) {
    function handleClick() {
        saveToLocalStorage(title, cover, olid);
    }

    return (
        <div className="flex flex-col border rounded-2xl gap-6 p-4 sm:shrink-0">
            {cover !== "" ? <img src={cover} alt={title} /> : <h1>{title}</h1>}
            <button className=" border rounded-2xl" onClick={handleClick}>
                Add to List
            </button>
            <label>
                Your rating: <input type="number" min={0} max={10} />
            </label>
        </div>
    );
}
