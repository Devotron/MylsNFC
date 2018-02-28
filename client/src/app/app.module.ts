import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AgmCoreModule} from "@agm/core";
import {environment} from "../environments/environment";
import {MapComponent} from "./map/map.component";
import {LivreurCreationFormComponent} from "./forms/Livreur/livreur-creation-form.component";
import {LivreursComponent} from "./listing/livreurs/livreurs.component";
import {ClientsComponent} from "./listing/clients/clients.component";
import {LivraisonsComponent} from "./listing/livraisons/livraisons.component";
import {ApplicationService} from "./services/application.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        LoginPageComponent,
        MapComponent,
        LivreurCreationFormComponent,
        LivreursComponent,
        ClientsComponent,
        LivraisonsComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: environment.GoogleMapApiKey
        }),
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [ApplicationService, Http],
    bootstrap: [AppComponent]
})
export class AppModule {
}
