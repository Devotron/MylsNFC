import { Component } from '@angular/core';
import {livraisons} from "../../models/mocks";

@Component({
    styleUrls: ['./livraisons.component.scss'],
    templateUrl: './livraisons.component.html'
})
export class LivraisonsComponent {

    Livraisons1 = livraisons;

    open: Boolean = false;
    lat: number = 43.703769;
    lng: number = 7.270230;
    lat2: number = 43.703769;
    lng2: number = 7.270230;

}
