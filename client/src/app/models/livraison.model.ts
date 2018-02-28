import {Position} from "./position.model";
import {Colis} from "./colis.model";
import {Livreur} from "./livreur.model";

export enum EtatLivraison {
    EN_COURS = "En cours",
    LIVRE = "Livr&eacute",
    EN_ATTENTE = "En attente",
}

export class Livraison {
    id: number;
    livreur: Livreur;
    colis: Colis;
    etat: string;

    constructor(id: number, livreur: Livreur, colis: Colis, etat: string) {
        this.id = id;
        this.livreur = livreur;
        this.colis = colis;
        this.etat = etat;
    }
}
