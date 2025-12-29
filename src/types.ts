export type book = {
    author_key: string[];
    author_name?: string[];
    cover_edition_key: string;
    cover_i?: number;
    first_publish_year: number;
    language?: string[];
    title: string;
    key: string;
};

export type ReadingStatsCounts = {
    want_to_read: number;
    currently_reading: number;
    already_read: number;
};

export type BookDetails = {
    description: string | {value:string};
    title: string;
    covers?: number[];
};
