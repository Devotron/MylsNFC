export class Client {
    id: number;
    name: string;
    //email: string;
    //adresse: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public toString = (): string => {
        return `Client (id: ${this.id}, nom: ${this.name})`;
    }
}
