/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {LoginPageComponent} from "./login-page/login-page.component";
import {MapComponent} from "./map/map.component";
import {LivreurCreationFormComponent} from "./forms/Livreur/livreur-creation-form.component";
import {LivreursComponent} from "./listing/livreurs/livreurs.component";
import {ClientsComponent} from "./listing/clients/clients.component";
import {LivraisonsComponent} from "./listing/livraisons/livraisons.component";


export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'livraison/map/:id', component: MapComponent},
    {path: 'form', component: LivreurCreationFormComponent},
    {path: 'livreurs', component: LivreursComponent},
    {path: 'clients', component: ClientsComponent},
    {path: 'livraisons', component: LivraisonsComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
