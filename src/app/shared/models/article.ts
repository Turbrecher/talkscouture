import { User } from "./user";

export interface Article {
    id: string,
    title: string,
    short_title?: string,
    subtitle: string,
    date: string,
    time: string,
    headerPhoto: string,
    thumbnail: string,
    section: string,
    writer_id: string,
    writer: User,
    readTime: string,
    description: string,
    content: string,
}
