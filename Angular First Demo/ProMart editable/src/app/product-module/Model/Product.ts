export class Product{
    constructor(public id:any,public name:any,public desc:any,public price:any,public category:any,public qty:any){

    }
}

export   const categ=['Mobile','Laptop','Electronic Accessories'];

export let productList:Product[]=[new Product("P102","RedmiNote8","Cooling",7000,"Mobile",8),new Product('P101',"Dell Inspiron","I7 Processor",70000,"Laptop",4)
                                ,new Product("P103","Iphone","Performance",80000,"Mobile",2),new Product('P104',"Asus Rog","Best Gaming Experience",60000,"Laptop",7)
                            ,new Product("P105","Ram Stick 8 gb","DDR5 4000 MHz",2000,"Electronic Accessories",10),new Product('P106',"RTX 4090","Ray tracing Enabled",120000,"Electronic Accessories",1)];
