/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, OnInit} from '@angular/core';
import {Colis} from "../models/colis.model";
import {colis} from "../models/mocks";
import {Observable} from "rxjs/Observable";

@Component({
    styleUrls: ['./map.component.scss'],
    templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

    livraison: Colis;
    private data: Observable<{lat: number, long: number}>;
    private anyErrors: boolean;
    private finished: boolean;

    private values: Array<{lat: number, long: number}>;
    title: string = 'My first AGM project';
    // 43.705316, 7.269236
    lat: number = 43.703769;
    lng: number = 7.270230;
    open: Boolean = false;

    ngOnInit(): void {

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

        this.livraison = colis[0];
    }

}
