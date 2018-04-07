import { Component } from '@angular/core';

@Component({
    selector: 'myngstyle',
    template: `
        <h1>Ng Style Binding</h1>

        <div [style.font-size]="isSpecial ? 'x-large' : 'smaller'">
            Font size depends on isSpecial
        </div>

        <br/>

        <div [ngStyle] = "currentStyles">
            This div is calling the function from class to set the style.
            This div is isSpecial, canSave 
        </div>
    `
})

export class NgStyleComponent{
    isSpecial = true;
    canSave = true;
    currentStyles = {};

    constructor(){
        this.setCurrentStyles();
    }

    setCurrentStyles(){
        this.currentStyles = {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-size': this.isSpecial ? '24px' : '12px'
        }
    }
}