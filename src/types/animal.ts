export interface Animal {id:number; name: string; age: number;}

export interface AnimalOperationProps {
    animals: ()=>Animal[];
    incrementAge:(id:number)=>void;
    remove:(id:number)=>void;
    add:(name:string,age:number)=>void;
}