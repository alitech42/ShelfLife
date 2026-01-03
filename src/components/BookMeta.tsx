import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { MetaData } from "../types";

export function BookMeta() {
    const { olid } = useParams();

    const [metaData, setMetaData] = useState<MetaData[]>([]);

    const relevantEdition = metaData.find(
        ({ languages, number_of_pages, publishers }) =>
            languages?.[0]?.key === "/languages/eng" &&
            number_of_pages &&
            publishers?.length
    );

    useEffect(() => {
        async function getData() {
            const response = await fetch(
                `https://openlibrary.org/works/${olid}/editions.json`
            );
            const data = await response.json();

            setMetaData(data.entries);
        }

        getData();
    }, [olid]);

    return (
        <div className=" flex flex-row gap-3 sm:col-end-2 sm:row-end-3">
            <div className="border rounded-2xl p-3">
                <p>Publish Date</p>
                <p>{relevantEdition?.publish_date ?? "No Data"}</p>
            </div>
            <div className="border rounded-2xl p-3">
                <p>Publisher</p>
                <p>{relevantEdition?.publishers[0] ?? "No Data"}</p>
            </div>
            <div className="border rounded-2xl p-3">
                <p>Pages</p>
                <p>{relevantEdition?.number_of_pages ?? "No Data"}</p>
            </div>
        </div>
    );
}
