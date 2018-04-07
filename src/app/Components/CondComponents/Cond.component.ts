import { Component } from '@angular/core'

@Component({
    selector : 'cond',
    template : `
        <h1>
            Hello <!-- <span *ngIf="showName">{{ name }}</span>
            <span *ngIf="!showName">World</span> -->

            <span *ngIf="showName; else noName">{{ name }}</span>
            <ng-template #noName>Else</ng-template>
        </h1>
        <hr>
        
        <p>
            Shorthand using ternanary operator<br>
            Hello {{showName ? name : 'World' }}
        </p>
        <hr>

        <div [ngSwitch] = "greeting">
            <div *ngSwitchCase = "'1'">Good Morning</div>
            <div *ngSwitchCase = "'2'">Good Afternoon</div>
            <div *ngSwitchCase = "'3'">Good Evening</div>
            <div *ngSwitchDefault>Good Bye</div>
        </div>

    `
})

export class CondComponent {
    name:string = "John";
    showName:boolean = false;
    greeting:number = 100
}