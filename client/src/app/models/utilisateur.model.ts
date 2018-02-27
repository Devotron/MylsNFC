export enum TypeUtilisateur {
    CLIENT = "Client", ADMIN = "Admin",
}

export class Utilisateur {
    email: string;
    role: TypeUtilisateur;
}
