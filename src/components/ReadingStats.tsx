import { Stat } from "./Stat";

export function ReadingStats() {
    return (
        <div className="flex flex-row gap-2 border rounded-2xl p-4">
            <Stat label="Want to read" data="100"/>
            <Stat label="Currently reading" data="100"/>
            <Stat label="Already read" data="100"/>
        </div>
    );
}
