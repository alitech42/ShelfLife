import { useParams } from "react-router";
import { Stat } from "./Stat";
import { useEffect, useState } from "react";
import type { ReadingStatsCounts } from "../types";

export function ReadingStats() {
    const { olid } = useParams();

    const [stats, setStats] = useState<ReadingStatsCounts>();

    useEffect(() => {
        async function getStats() {
            const response = await fetch(
                `https://openlibrary.org/works/${olid}/bookshelves.json`
            );
            const data = await response.json();

            setStats(data.counts);
        }
        getStats();
    }, [olid]);

    return (
        <div className="flex flex-row gap-2 border rounded-2xl p-4 sm:col-start-2 sm:row-start-1 sm:justify-self-center self-center">
            <Stat
                label="Want to read"
                data={stats ? stats.want_to_read : "Loading..."}
            />
            <Stat
                label="Currently reading"
                data={stats ? stats.currently_reading : "Loading..."}
            />
            <Stat
                label="Already read"
                data={stats ? stats.already_read : "Loading..."}
            />
        </div>
    );
}
