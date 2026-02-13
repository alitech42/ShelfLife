import { BookListItem } from "../components/BookListItem"

export function BookList() {
    const listBooks: string[] = JSON.parse(localStorage.getItem('data') || '[]')

    return (
        <main className="flex-6 flex flex-col gap-3  p-5 bg-[#FDFEFE]">
            {listBooks.map(listBook => <BookListItem title={listBook} key={crypto.randomUUID()}/>)}
        </main>
    )
}