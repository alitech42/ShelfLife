type BookDescriptionProps = {
    description: string;
};

export function BookDescription({ description }: BookDescriptionProps) {
    return (
        <div className=" sm:col-start-2 sm:row-start-2 sm:overflow-y-auto sm:justify-self-center self-center">
            <p>{description}</p>
        </div>
    );
}
