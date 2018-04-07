import { Component } from '@angular/core'

@Component({
    selector: 'mymouseevent',
    template: `
        <h1>Mouse Events</h1>
        <br>
        <button (click)="fireEvent($event)">Fire</button>
        <br>
        <button (mouseover)="fireEventLogs($event)">Mouseover</button>
        <br>
        <button (mousedown)="fireEventLogs($event)">Mousedown</button>
        <br>
        <button (mouseup)="fireEventLogs($event)">Mouseup</button>
        <br>
        <button (dblclick)="fireEventLogs($event)">Double Click</button>
        <br>
        <button (drag)="fireEventLogs($event)">Drag</button>
        <br>
        <button (dragover)="fireEventLogs($event)">Dragover</button>
    `
})

export class MouseEventComponent{
    
    fireEvent(){
        alert('You clicked the button');        
    }

    fireEventLogs(eventObj){
        console.log(eventObj.type)
    }
}