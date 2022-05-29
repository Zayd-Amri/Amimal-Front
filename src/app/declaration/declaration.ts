import { CloudinaryImage } from "@cloudinary/base";

export interface Declaration {
    titre:string;
    description:string;
    gouvernorat:string,

    id:string;
    image:string;
    latitude:string;

    longitude:string;
    type:string;
    urlImage:CloudinaryImage


}
