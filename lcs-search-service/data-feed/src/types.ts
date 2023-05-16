export type Place = {
    name: string;
    address: string;
    working_hours: Record<string, Array<string>>;
}