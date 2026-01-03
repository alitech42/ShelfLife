type BookDescriptionProps = {
    description: string;
};

export function BookDescription({ description }: BookDescriptionProps) {
    return (
        <div className="self-center sm:overflow-scroll sm:h-92">
            <p>{description}</p>
        </div>
    );
}
