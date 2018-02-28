/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Livreur} from "../../models/livreur.model";

@Component({
    selector: 'app-livraison-form',
    styleUrls: ['./livraison-creation-form.component.scss'],
    templateUrl: './livraison-creation-form.component.html'
})
export class LivraisonCreationFormComponent implements OnInit {

    @Input() showModal: Boolean = false;
    @Output() formAction = new EventEmitter();

    livreurForm = new FormGroup({
       nom: new FormControl('', Validators.required),
    });

    ngOnInit(): void {
    }

    submit() {
        if ( !(this.livreurForm.get('nom').invalid
                && (this.livreurForm.get('nom').dirty || this.livreurForm.get('nom').touched))
                &&  !this.livreurForm.get('nom').pristine) {
            // this.showModal = false;
            this.formAction.emit();
            console.log(this.livreurForm.get('nom').value);
            let nouveaulivreur = new Livreur(0, this.livreurForm.get('nom').value);
        }
    }

    closeModal() {
        this.livreurForm.reset();
        this.formAction.emit();
        // this.showModal = false;
    }
}
