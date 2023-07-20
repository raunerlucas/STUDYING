export interface Moment{
    id?: number;
    title: string;
    description: string;
    image: string;
    created_at?: string;
    udated_at?: string;
    comments?: [{text: string, usaername: string}];
}