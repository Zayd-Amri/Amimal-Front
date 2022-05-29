export interface User {
    id: number;
    email: string;
    username: string;
    roles: Array<any>;
    password: string;
    nom: string;
    prenom: string;
    age: number;
    adresse: string;
    imgUrl: string;
}