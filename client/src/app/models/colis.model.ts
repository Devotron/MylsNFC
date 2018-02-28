import {Client} from "./client.model";
import {Position} from "./position.model";

export class Colis {
    id: number;
    state: string;
    //libelle: string;
    //position: Position;
    //destinataire: Client;
    constructor(id: number, state: string) {
        this.id = id;
        this.state = state;
    }
}

