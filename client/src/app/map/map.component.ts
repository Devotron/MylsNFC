import {Component, OnInit} from '@angular/core';
import {Colis} from "../models/colis.model";
import {Observable} from "rxjs/Observable";
import {ApplicationService} from "../services/application.service";
import {ActivatedRoute} from "@angular/router";
import {EtatLivraison} from "../models/livraison.model";

@Component({
    styleUrls: ['./map.component.scss'],
    templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

    livraison: Colis;
    public etats = EtatLivraison;
    private data: Observable<{lat: number, long: number}>;
    private anyErrors: boolean;
    private finished: boolean;

    private values: Array<{lat: number, long: number}>;
    // Demo
    lat: number = 43.703769;
    lng: number = 7.270230;
    open: Boolean = false;

    constructor(private appService: ApplicationService, private route: ActivatedRoute) {}

    ngOnInit(): void {

        this.route.params.subscribe(params => {
            console.log(params);
            console.log(+params['id']);
            this.loadData(+params['id']);
        });

        this.values = [// 43.704518, 7.264166
            {lat: 43.705316, long: 7.269236},
            {lat: 43.705108, long: 7.266414},
            {lat: 43.704518, long: 7.264166},
        ];

        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.values[0]);
            }, 5000);

            setTimeout(() => {
                observer.next(this.values[1]);
            }, 10000);

            setTimeout(() => {
                observer.next(this.values[2]);
            }, 15000);

            setTimeout(() => {
                observer.complete();
            }, 20000);
        });

        let subscription = this.data.subscribe(
            value => {this.lat = value.lat; this.lng = value.long},
            error => this.anyErrors = true,
            () => this.finished = true
        );

    }

    loadData(id: number) {

        this.appService.getLivraison(id).subscribe(res => {
            this.livraison = res;
        })
    }

}
