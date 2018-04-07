import { Component } from '@angular/core'

@Component({
    selector:'formsubmit',
    template: `
    <div class="container">
        <h1>Form Submit</h1>
        <form (submit) = "onSubmit()">
            <div class="form-group">
            <label>Name</label>
                <input type=text name="value" class="form-control" [(ngModel)] = "value" />
            </div>
            <input type="submit" class="btn btn-success" value="Submit" />
        </form>

        <ul class="list-group">
            <li class="lis-group-item" *ngFor="let user of users">{{ user }}</li>
        </ul>
    </div>
    `
})

export class FormSubmitComponent{
    value:string = '';
    users:string[] = ['Chris Gayle', 'Virat Kohli', 'Shaun Pollock']

    onSubmit(){
        this.users.push(this.value);
        this.value = '';
    }

}