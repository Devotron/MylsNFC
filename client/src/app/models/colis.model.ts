import {Client} from "./client.model";
import {Position} from "./position.model";

export class Colis {
    id: number;
    libelle: string;
    position: Position;
    destinataire: Client;
}
