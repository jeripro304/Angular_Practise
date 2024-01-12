export let category = ['Mobile','Laptop','Electronic Accessories'];
export class Product{
    

    constructor(public pid:any,public pname:any,public pdesc:any,public price:number,public pcategory:any,public pqty:number){
        
    }



    public set Pid(id:string){
        this.pid = id;
    }
    public get Pid(){
        return this.pid;
    }

   

    public set Pname(name:string){
        this.pname = name;
    }
    public get Pname(){
        return this.pname;
    }

    public set Pdesc(desc:string){
        this.pdesc = desc;
    }
    public get Pdesc(){
        return this.pdesc;
    }

    public set Pprice(price:number){
        this.price = price;
    }
    public get Pprice(){
        return this.price;
    }

    public set Pqty(qty:number){
        this.pqty = qty;
    }
    public get Pqty(){
        return this.pqty;
    }
    
}