/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Livreur} from "../../models/livreur.model";

@Component({
    styleUrls: ['./livreur-creation-form.component.scss'],
    templateUrl: './livreur-creation-form.component.html'
})
export class LivreurCreationFormComponent implements OnInit {
    showModal: Boolean = true;

    livreurForm = new FormGroup({
       nom: new FormControl('', Validators.required),
    });

    ngOnInit(): void {
    }

    submit() {
        if ( !(this.livreurForm.get('nom').invalid && (this.livreurForm.get('nom').dirty || this.livreurForm.get('nom').touched)) ) {
            this.showModal = false;
            console.log(this.livreurForm.get('nom').value);
            let nouveaulivreur = new Livreur(0, this.livreurForm.get('nom').value, 0, 0);
        }
    }

    closeModal() {
        this.livreurForm.reset();
        this.showModal = false;
    }
}
