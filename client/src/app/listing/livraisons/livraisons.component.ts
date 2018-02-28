import {Component, OnInit} from '@angular/core';
import {livraisons} from "../../models/mocks";
import {EtatLivraison, Livraison} from "../../models/livraison.model";
import {ApplicationService} from "../../services/application.service";
import {Colis} from "../../models/colis.model";

@Component({
    styleUrls: ['./livraisons.component.scss'],
    templateUrl: './livraisons.component.html'
})
export class LivraisonsComponent implements OnInit {

    public tabLivraisons: Colis[];
    public etats = EtatLivraison;
    open: Boolean = false;
    constructor(private applicationService: ApplicationService) {}

    ngOnInit(): void {
        this.tabLivraisons = [];

        this.applicationService.getLivraisons().subscribe(
            res => {
                this.tabLivraisons  = res;
                for (let entry of this.tabLivraisons ) {
                    console.log(entry.id + " " + entry.state);
                }
        });
    }



    navigateToMap(id: number) {
        this.applicationService.navigateToMap(id, false);
    }

}
