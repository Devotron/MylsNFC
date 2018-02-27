import {Position} from "./position.model";
import {Colis} from "./colis.model";
import {Livreur} from "./livreur.model";

export class Livraison {
    id: number;
    livreur: Livreur;
    colis: Colis;
    etat: string;

    constructor(id: number, livreur: Livreur, position: Position, colis: Colis, etat: string) {
        this.id = id;
        this.livreur = livreur;
        this.colis = colis;
        this.etat = etat;
    }
}
