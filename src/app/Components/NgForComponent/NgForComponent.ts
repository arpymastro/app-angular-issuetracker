import { Component } from '@angular/core'

@Component({
    selector: 'myngfor',
    template:
    `
        {{people}}

        <ul>
            <li *ngFor="let person of people; let i = index">
                {{i+1}} {{person}}
            </li>
        </ul>

        <h2>People2 </h2>
        <ul>
            <li *ngFor="let person of people2;">
                {{person.firstName}}  {{person.lastName}}
            </li>
        </ul>
    `
})

export class NgForComponent{
    people:string[] = ['Rick', 'Daryl', 'Carl', 'Glen'];

    people2 = [
        {
            firstName: 'Arpan',
            lastName: 'M'
        },
        {
            firstName: 'Shefali',
            lastName: 'B'
        },
        {
            firstName: 'Mohit',
            lastName: 'M'
        },
        {
            firstName: 'Ravi',
            lastName: 'P'
        }

    ];

    constructor(){
        this.people[2] = 'Carol';
    }
}