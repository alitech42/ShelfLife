type BookDescriptionProps = {
    description: string;
};

export function BookDescription({ description }: BookDescriptionProps) {
    return (
        <div>
            <p>{description}</p>
        </div>
    );
}
