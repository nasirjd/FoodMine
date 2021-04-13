export class Food{
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean = false;
    stars:number = 0;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}