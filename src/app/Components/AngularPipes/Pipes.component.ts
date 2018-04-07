import { Component } from '@angular/core';

@Component({

    selector: 'mypipes',
    template:`
        <h1>Angular Pipes</h1>
        <p>Full Date: {{ fulldate }}</p>
        <br/>
        <h1>Using pipes</h1>
        <p>Only date: {{ fulldate | date}}</p>
        <p>Only year: {{ fulldate | date:"yyyy"}}</p>
        <p>Date formating: {{ fulldate | date:"MM-dd-yyyy"}}</p>
        <p>Uppercase: {{ 'uppercase' | uppercase}}</p>
        <p>Lowercase: {{ 'LOWerCAse' | lowercase}}</p>
        <!--<p>Currency: {{ total | currency}}</p>
        <p>Currency parameter: {{ total | currency:"INR"}}</p>
        <p>Currency symbol parameter: {{ total | cureency:"INR":"1"}}-->
        <p>Percentage: {{ fee | percent}}

    `
})

export class PipesComponent{
    fulldate = new Date(1990, 1, 20);
    total  = 1000;
    fee = 0.5;
}