export function BookActions() {
    return (
        <div className="flex flex-col border rounded-2xl gap-6 p-4">
            <img
                src="https://ia800505.us.archive.org/view_archive.php?archive=/35/items/l_covers_0014/l_covers_0014_65.zip&file=0014658378-L.jpg"
                alt="title"
            />
            <button className=" border rounded-2xl">Add to List</button>
            <label>
                Your rating: <input type="number" min={0} max={10} />
            </label>
        </div>
    );
}
