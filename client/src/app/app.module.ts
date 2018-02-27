import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
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

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        LoginPageComponent,
        MapComponent,
        LivreurCreationFormComponent,
        LivreursComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: environment.GoogleMapApiKey
        }),
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
