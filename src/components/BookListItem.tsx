export function BookListItem({title, olid}: {title: string, olid:string}) {
    return (
        
        <div className=" border border-solid border-black rounded-3xl p-3">
            <h1>{title}</h1>
            <p>{olid}</p>
        </div>
    );
}
