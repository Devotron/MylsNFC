import { Injectable } from '@angular/core';
import {Livreur} from "../models/livreur.model";
import {Livraison} from "../models/livraison.model";
import {Colis} from "../models/colis.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Client} from "../models/client.model";
import {of} from "rxjs/observable/of";

export const enum Entities {
    CLIENT = "entities.client/",
    LIVREUR = "entities.livreur/",
    COLIS = "entities.colis/",
    LIVRAISON = "entities.livraison/",
};

@Injectable()
export class ApplicationService {

    private livreurs: Array<Livreur>;
    private livraisons: Array<Livraison>;
    private Colis: Array<Colis>;
    private url = environment.APIurl;

    constructor(private http: HttpClient, private router: Router) {}

    public navigateToMap(id: number, reload: boolean) {

        let route = 'livraison';
        if ( reload ) {
            this.router.navigate(['livraison/map', id], {skipLocationChange: false });
        } else {
            this.router.navigate(['livraison/map', id], {skipLocationChange: true });
        }
    }

    // > CLIENTS
    public getClients(): Observable<Client[]> {
        let api = this.url + Entities.CLIENT;
        console.log("GET API : " + api);
        return this.http.get<Client[]>(api);
    }

    public getClient(id: number): Observable<Client> {
        return this.http.get<Client>(this.url + Entities.CLIENT  + id);
    }

    // > LIVREURS
    public getLivreurs(): Observable<Livreur[]> {
        let api = this.url + Entities.LIVREUR;
        console.log("GET API : " + api);
        return this.http.get<Livreur[]>(api);
    }

    public getLivreursCount(): Observable<number> {
        let api = this.url + Entities.LIVREUR + "count";
        console.log("GET API : " + api);
        return this.http.get<number>(api);
    }

    public createLivreur(livreur: Livreur): Observable<boolean> {
        let messageID;
        let api = this.url + Entities.LIVREUR;
        const req = this.http.post(api, livreur);

        req.subscribe();
        return of(true);
    }


    // > LIVRAISONS
    public getLivraisons(): Observable<Colis[]> {
        let api = this.url + Entities.COLIS;
        console.log("GET API : " + api);
        return this.http.get<Colis[]>(api);
    }

    public getLivraison(id: number): Observable<Colis> {
        return this.http.get<Colis>(this.url + Entities.COLIS + id);
    }

    //
    // public getSingleMessage(id: number): Observable<Message> {
    //     return this.http.get<Message>(this.ressourceUrl + '/' + id);
    // }
    //

}
