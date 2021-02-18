import { ProductBase } from "./product-base.model";

export class Product extends ProductBase {
    id: number;

    constructor(id: number) {
        super();
        this.id = id;
    }
}
