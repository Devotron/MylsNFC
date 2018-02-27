/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
    styleUrls: ['./clients.component.scss'],
    templateUrl: './clients.component.html'
})
export class ClientsComponent {

    open: Boolean = false;
    lat: number = 43.703769;
    lng: number = 7.270230;
    lat2: number = 43.703769;
    lng2: number = 7.270230;

}
