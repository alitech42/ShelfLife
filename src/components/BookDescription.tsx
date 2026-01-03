type BookDescriptionProps = {
    description: string;
};

export function BookDescription({ description }: BookDescriptionProps) {
    return (
        <div className=" sm:col-end-2 sm:row-end-2">
            <p>{description}</p>
        </div>
    );
}
