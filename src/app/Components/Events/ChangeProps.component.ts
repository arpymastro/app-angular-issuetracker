import { Component } from '@angular/core';

@Component({
    selector: 'changeprops',
    template: `
        <h1>Change properties with events</h1>
        <br/>
        <p>Values to be changed: {{ text }}</p>
        <button (click) = "changeText()">Change Text</button>
        <br/>
        <p *ngIf="switch">Hide/Show values: {{ value }}</p>
        <button (click) = "toggle()">Toggle</button>
    `
})

export class ChangePropsComponent{
    text:string = "Hello World";
    value:string = "Angular 4";
    switch:boolean = true;

    changeText(){
        this.text = "Goodbye World";
    }

    toggle(){
        this.switch = !this.switch;
    }
}