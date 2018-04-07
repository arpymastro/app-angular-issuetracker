import { Component } from '@angular/core';

@Component({
    selector : 'sandbox1',
    template : 
    `
        <h1>{{ name }}</h1>
    `
})

export class Sandbox1Component{
    name:string = 'John Doe';
    age:number = 35;
    hasChildren:boolean = true;
    city:any = 'Bangalore';
    myNums:number[] = [1,2,3];
    myStrs:string[] = ['Hello', 'World'];
    myAny:any[] = ['Hello', 'World', 1, 2];
    myTuple: [string, number] = ['hello', 3];
    ununsable:void = undefined;
    undefinedVar:undefined = undefined;
    n: null = null;
    
    constructor(){
        this.myNums
    }
}