type props = {
    label: string;
    data: string | number;
};

export function Stat({ label, data }: props) {
    return (
        <div className="border-r last:border-r-0 text-center p-3">
            <p>{label}</p>
            <p>{data}</p>
        </div>
    );
}
