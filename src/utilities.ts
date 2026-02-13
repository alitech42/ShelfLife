export function saveToLocalStorage(cool: string) {
    const existing = localStorage.getItem("data");
    const arr: string[] = existing ? JSON.parse(existing) : [];

    const updatedArr = [...arr, cool];

    localStorage.setItem("data", JSON.stringify(updatedArr));

}
