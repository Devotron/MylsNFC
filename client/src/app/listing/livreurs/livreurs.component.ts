
import { Component } from '@angular/core';
import {Livreur} from "app/models/livreur.model";
import {livreurs} from "../../models/mocks";

@Component({
    styleUrls: ['./livreurs.component.scss'],
    templateUrl: './livreurs.component.html'
})
export class LivreursComponent {

    livreurs1 = livreurs;

    open: Boolean = false;
    lat: number = 43.703769;
    lng: number = 7.270230;
    lat2: number = 43.703769;
    lng2: number = 7.270230;

}
