export function BookInfo() {
    return (
        <main className="flex flex-col h-full justify-between items-center p-4 gap-5 overflow-auto">
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
            <div className="flex flex-row gap-2 border rounded-2xl p-4">
                <div className="border-r text-center p-3">
                    <p>Want to read</p>
                    <p>100</p>
                </div>
                <div className="border-r text-center p-3">
                    <p>Currently reading</p>
                    <p>100</p>
                </div>
                <div className=" text-center p-3">
                    <p>Already read</p>
                    <p>100</p>
                </div>
            </div>
            <div>
                <p>
                    For a thousand years ashes have fallen from the sky. For a
                    thousand years nothing has flourished. For a thousand years
                    the skaa have been enslaved and live in misery, mired in
                    inevitable fear. For a thousand years the Lord Ruler has
                    reigned with absolute power, ruling thanks to terror, his
                    powers and his immortality, aided by "benders" and
                    "inquisitors", along with the powerful magic of Allomancy.
                </p>
            </div>
            <div className=" flex flex-row gap-3">
                <div className="border rounded-2xl p-3">
                    <p>Publish Date</p>
                    <p>2019</p>
                </div>
                <div className="border rounded-2xl p-3">
                    <p>Publisher</p>
                    <p>Tor Fantasy</p>
                </div>
                <div className="border rounded-2xl p-3">
                    <p>Pages</p>
                    <p>672</p>
                </div>
            </div>
        </main>
    );
}
