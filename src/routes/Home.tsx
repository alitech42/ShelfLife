export function Home() {
    return (
        <main className="flex-6 flex flex-col items-center p-5">
            <h1 className=" flex justify-center items-center text-7xl w-full flex-1">What have you read today?</h1>
            <div className="flex flex-2 flex-col justify-center items-center w-full">
                <input
                    type="text"
                    placeholder="Search books here"
                    className="border border-solid rounded-2xl p-2 w-[60%]"
                />
            </div>
        </main>
    );
}
