import { Component } from '@angular/core'

@Component({
    selector : 'myngclass',
    template: `
        <h1>Ng Class </h1>
        <h4 [class.special] = "isSpecial">This class binding is special</h4>
        <h4 [ngClass] = "currentClasses">This h4 is initially special and savable</h4>
    `,
    styles: [
        `.special{
            color : green;
        }
        .savable{
            text-transform : uppercase;
        }
        `
    ]
})

export class NgClassComponent{
    isSpecial:boolean = true;
    canSave:boolean = true;
    currentClasses = {}

    constructor(){
        this.setCurrentClasses();
    }

    setCurrentClasses(){
        this.currentClasses = {
            savable : this.canSave,
            special : this.isSpecial
        }
    }
}