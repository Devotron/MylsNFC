import { Injectable } from '@angular/core';
import {Livreur} from "../models/livreur.model";
import {Livraison} from "../models/livraison.model";
import {Colis} from "../models/colis.model";

@Injectable()
export class ApplicationService {

    private livreurs: Array<Livreur>;
    private livraisons: Array<Livraison>;
    private Colis: Array<Colis>;

  constructor() { }

  getVideoThumbnailUrl(): string {
      return "";
  }

}
