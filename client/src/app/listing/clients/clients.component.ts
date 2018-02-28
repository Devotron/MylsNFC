
import {Component, OnInit} from '@angular/core';
import {Client} from "../../models/client.model";
import {ApplicationService} from "../../services/application.service";

@Component({
    styleUrls: ['./clients.component.scss'],
    templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {

    tabClients: Client[];
        // Array<Client>;

    constructor(private appService: ApplicationService) {}

    ngOnInit(): void {

        this.tabClients = [];

        this.appService.getClients().subscribe(
            res => {
                this.tabClients = res;
                for (let entry of this.tabClients) {
                    console.log(entry.id + " " + entry.name);
                }
            });
    }

}
