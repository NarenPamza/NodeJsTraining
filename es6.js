export class student {
    constructor(sno,name){
        this.sno = sno;
        this.name = name;
    }

    display(){
        console.log("sno: "+ sno + " name: " + name);
        

    }
}

export var x = function(p){
    console.log("This function is working: param is " + p);

}