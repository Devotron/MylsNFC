import {Client} from "./client.model";
import {Colis} from "./colis.model";
import {Livreur} from "./livreur.model";
import {Position} from "./position.model";
import {EtatLivraison, Livraison} from "./livraison.model";


export const clients: Client[] = [
    { id: 1, name: 'Client 1'},
    { id: 1, name: 'Client 2'},
    { id: 1, name: 'Client 3'},
    { id: 1, name: 'Client 4'}
];

export const colis: Colis[] = [
    {id: 1, state: "En cours"},
    {id: 2, state: "En cours"},
    {id: 3, state: "Livré"},
    {id: 4, state: "En Attente"},
];

export const livreurs: Livreur[] = [
    new Livreur(1, 'Livreur 1'),
    new Livreur(2, 'Livreur 2'),
    new Livreur(3, 'Livreur 3'),
    new Livreur(4, 'Livreur 4'),
];


export const livraisons: Livraison[] = [
    {id: 1, livreur: livreurs[0], colis: colis[0], etat: EtatLivraison.EN_COURS},
    {id: 2, livreur: livreurs[1], colis: colis[1], etat: EtatLivraison.EN_COURS},
    {id: 3, livreur: livreurs[2], colis: colis[2], etat: EtatLivraison.LIVRE},
    {id: 4, livreur: livreurs[3], colis: colis[3], etat: EtatLivraison.EN_ATTENTE},
]

