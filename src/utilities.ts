import type { listData } from "./types";

export function saveToLocalStorage(title: string, olid: string) {
    const existing = localStorage.getItem("data");
    const arr: listData[] = existing ? JSON.parse(existing) : [];

    const updatedArr = [...arr, {title, olid}];

    localStorage.setItem("data", JSON.stringify(updatedArr));
}
