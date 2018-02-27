import {Position} from "./position.model";

export class Livreur {
    id: number;
    nom: string;
    position: Position;

    constructor(id: number, nom: string, lat: number, lng: number) {
        this.id = id;
        this.nom = nom;
        this.position = new Position(lat, lng);
    }
}
