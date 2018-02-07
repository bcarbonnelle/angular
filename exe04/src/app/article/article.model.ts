import { Price } from "./price/price.model";



export class Article {

    name:string;
    category:string;
    description:string;
    trade:string;  

    price: Price;

    fileName:string;
  
    constructor(name:string,category:string,description:string,trade:string, price:Price,fileName:string) {
        this.name=name;
        this.category=category;
        this.trade=trade;
        this.description=description;
        this.price = price;
        this.fileName = fileName;
        console.log(this)
     
    }
  
   
}