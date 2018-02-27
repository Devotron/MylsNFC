import {Client} from "./client.model";
import {Colis} from "./colis.model";
import {Livreur} from "./livreur.model";
import {Position} from "./position.model";
import {Livraison} from "./livraison.model";

export const clients: Client[] = [
    { id: 1, nom: 'Client 1', email: 'client1@mail.com', adresse: 'rue 1'},
    { id: 1, nom: 'Client 2', email: 'client2@mail.com', adresse: 'rue 2'},
    { id: 1, nom: 'Client 3', email: 'client3@mail.com', adresse: 'rue 3'},
    { id: 1, nom: 'Client 4', email: 'client4@mail.com', adresse: 'rue 4'}
];

export const colis: Colis[] = [
    {id: 1, libelle: 'Commande 1', position: new Position(0, 0), destinataire: clients[0]},
    {id: 2, libelle: 'Commande 2', position: new Position(0, 0), destinataire: clients[1]},
    {id: 3, libelle: 'Commande 3', position: new Position(0, 0), destinataire: clients[2]},
    {id: 4, libelle: 'Commande 4', position: new Position(0, 0), destinataire: clients[3]},
];

export const livreurs: Livreur[] = [
    {id: 1, nom: 'Livreur 1', position: new Position(0, 0)},
    {id: 2, nom: 'Livreur 2', position: new Position(0, 0)},
    {id: 3, nom: 'Livreur 3', position: new Position(0, 0)},
    {id: 4, nom: 'Livreur 4', position: new Position(0, 0)},
];

export enum EtatLivraison {
    EN_COURS = "En cours",
    LIVRE = "Livré",
    EN_ATTENTE = "En attente",
}

export const livraisons: Livraison[] = [
    {id: 1, livreur: livreurs[0], colis: colis[0], etat: EtatLivraison.EN_COURS},
    {id: 2, livreur: livreurs[1], colis: colis[1], etat: EtatLivraison.EN_COURS},
    {id: 3, livreur: livreurs[2], colis: colis[2], etat: EtatLivraison.LIVRE},
    {id: 4, livreur: livreurs[3], colis: colis[3], etat: EtatLivraison.EN_ATTENTE},

]
