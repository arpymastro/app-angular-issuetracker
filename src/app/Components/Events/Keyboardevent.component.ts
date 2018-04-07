import { Component } from '@angular/core';

@Component({
    selector: 'keyboardevent',
    template:`
        <h1>Keyboard Events</h1>
        <div>
            <input type="text" (keyup)="fireEvent($event)" placeholder="Keyup event"/>
        </div>
        <div>
            <input type="text" (keydown)="fireEvent($event)" placeholder="Keydown event"/>
        </div>
        <div>
            <input type="text" (focus)="fireEvent($event)" placeholder="Focus event"/>
        </div>
        <div>
            <input type="text" (blur)="fireEvent($event)" placeholder="Blur event"/>
        </div>
        <!-- Also events for cut,copy, paste can be added -->
        <hr/>
        
        <div>
            <input type="text" (keyup)="changeText($event)" placeholder="change text event"/>
        </div>
        <h2>{{ value }}</h2>
        
    ` 
})

export class KeyboardComponent{
    value:string = "Inital text";

    fireEvent(e){
        console.log(e.type);
    }

    changeText(e){
        this.value = e.target.value;
    }
}