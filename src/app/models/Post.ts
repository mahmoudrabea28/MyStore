export class Post {

    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    amount:number=0;
    total:string='';

    constructor() {

        this.id = 0;
        this.name = '';
        this.price = 0;
        this.url = '';
        this.description = '';
        this.amount = 0;
        this.total= '';

    }
    
}

