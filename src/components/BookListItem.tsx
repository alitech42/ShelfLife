export function BookListItem({title}: {title: string}) {
    return (
        <div className=" border border-solid border-black rounded-3xl p-3">
            <h1>{title}</h1>
        </div>
    );
}
