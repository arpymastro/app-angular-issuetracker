import { Component } from '@angular/core';

@Component({
    selector : 'sandbox',
    template : `
    <h1>{{ name }} is {{age}} years old</h1>
    <br>
    <h2>My name is {{person.firstName}} {{person.lastName}}</h2>
    `
})

export class SandboxComponent{
    name = "Ram";
    age = 35;
    person = {firstName: 'Steve', lastName : 'Smith'}

    constructor(){
        console.log('Contstructor ran..');
        //this.age = 36
        this.hasBirthday();
        this.hasBirthday();
        this.hasBirthday();
    }

    hasBirthday(){
        this.age += 1;
    }
}
