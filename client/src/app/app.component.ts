import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router) {
    }

    /* TODO: 1 - service de recherche de colis (search bar)
       TODO: 2 - appel API REST
       TODO: 3- formulaire livraison
    */
}
