export function ReadingStats() {
    return (
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
    );
}
