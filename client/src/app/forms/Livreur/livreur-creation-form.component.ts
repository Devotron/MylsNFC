
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Livreur} from "../../models/livreur.model";
import {ApplicationService} from "../../services/application.service";
import {Observable} from "rxjs/Observable";
import {debounceTime} from "rxjs/operator/debounceTime";

@Component({
    selector: 'app-livreur-form',
    styleUrls: ['./livreur-creation-form.component.scss'],
    templateUrl: './livreur-creation-form.component.html'
})
export class LivreurCreationFormComponent implements OnInit {

    @Input() showModal: Boolean = false;
    @Output() formAction = new EventEmitter();

    livreurForm = new FormGroup({
       nom: new FormControl('', Validators.required),
    });

    constructor(private appService: ApplicationService) {}

    ngOnInit(): void {
    }

    submit() {
        if ( !(this.livreurForm.get('nom').invalid
                && (this.livreurForm.get('nom').dirty || this.livreurForm.get('nom').touched))
                &&  !this.livreurForm.get('nom').pristine) {
            // this.showModal = false;
            console.log(this.livreurForm.get('nom').value);

            this.appService.getLivreursCount().subscribe(
              res => {
                  let id = res + 1;
                  this.appService.createLivreur(new Livreur(id, this.livreurForm.get('nom').value)).subscribe();
              }
            );
            this.formAction.emit();
        }
    }

    closeModal() {
        this.livreurForm.reset();
        this.formAction.emit();
        // this.showModal = false;
    }
}
