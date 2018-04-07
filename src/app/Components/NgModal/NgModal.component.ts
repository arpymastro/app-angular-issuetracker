import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector:'mymodal',
    template:`
        <h1>NgModal Component</h1>
        <p>Helps in two way data binding</p>
        <br/>

        <div class="container">
            <form>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" [(ngModel)] = "name" name="name"/>
                </div>
                <div class="form-group">
                    <label>Age</label>
                    <input type="number" class="form-control" [(ngModel)] = "age" name = "age" />
                </div>
                <input type="submit" value="Submit" class="btn btn-success">
            </form>
        </div>

        <h2>Name : {{ name }}</h2>
        <h2>Age : {{ age }}</h2>
    `
})

export class ModalComponent{
    name:string = '';
    age:number = 0;
}