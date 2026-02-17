import type { listData } from "./types";

export function saveToLocalStorage(title: string, cover: string, olid: string, rating: string) {
    const existing = localStorage.getItem("data");
    const arr: listData[] = existing ? JSON.parse(existing) : [];

    const updatedArr = [...arr, { title, cover, olid, rating }];

    localStorage.setItem("data", JSON.stringify(updatedArr));
}

export function updateLocalStorage(olid: string, userRating: string) {
    const existing = localStorage.getItem("data");
    const arr: listData[] = existing ? JSON.parse(existing) : [];

    const updatedArr = arr.map(book => {
        return book.olid === olid ? {...book, rating: userRating} : book
    })

    localStorage.setItem("data", JSON.stringify(updatedArr));
}