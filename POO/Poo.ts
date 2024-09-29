class Conta{
    public name:string;
    protected id: number;
    private saldo: number;

    constructor (name:string, id:number){
        this.name = name;
        this.id = id;
        this.saldo = 20

    }

    public getName(){
        console.log(this.name);
    }

    public getId(){
        console.log(this.id);
    }

    public getSaldo(){
        console.log(this.saldo);
    }

}