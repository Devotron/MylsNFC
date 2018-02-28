
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Livreur} from "app/models/livreur.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApplicationService} from "../../services/application.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/timer";
import {Subscription} from "rxjs/Subscription";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
    styleUrls: ['./livreurs.component.scss'],
    templateUrl: './livreurs.component.html'
})
export class LivreursComponent implements OnInit, OnDestroy {

    tabLivreurs: Livreur[];

    showForm: Boolean = false;

    private subscription: Subscription;

    constructor(private appService: ApplicationService) {}

    ngOnInit(): void {
        this.tabLivreurs = [];
        this.loadData();
        let timer = TimerObservable.create(2000, 5000);
        this.subscription = timer.subscribe(t => {
            this.loadData();
        });
    }

    private loadData(): void {
        this.appService.getLivreurs().subscribe(
            res => {
                this.tabLivreurs = res;
                for (let entry of this.tabLivreurs) {
                    console.log(entry.id + " " + entry.name);
                }
            });
    }

    showModal() {
        this.showForm = true;
    }

    onFormAction() {
        this.showForm = false;
        console.log("Form action");

        this.loadData();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
