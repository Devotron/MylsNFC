import {Position} from "./position.model";

export class Livreur {
    id: number;
    name: string;
    position: Position;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.position = new Position(0, 0);
    }
}
