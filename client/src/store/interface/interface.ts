export interface Product {
    id:number;
    name:string;
    price:number;
    image:string;
    stock:number;
    status:boolean;
    title:string;
}
export interface Cart {
    id:number;
    name:string;
    price:number;
    image:string;
    quantity:number;
    total:number;
}