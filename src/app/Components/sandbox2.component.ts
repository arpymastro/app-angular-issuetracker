import  {Component} from '@angular/core'
import { Customer } from './Customer'
@Component({
    selector : 'sandbox2',
    template : 
    `
        <h1>sandbox2</h1>
    `
})

export class Sandbox2Component{
    customer: Customer
    customers: Customer[]
    
    constructor(){
        this.customer = {
            id:101,
            name:'John Doe',
            email:'jd@gmail.com'
        }
        this.customers = [
            {
                id:104,
                name:'John Doe',
                email:'jd@gmail.com'
            },
            {
                id:102,
                name:'Arpan',
                email:'am@gmail.com'
            },
            {
                id:103,
                name:'Shefali',
                email:'sb@gmail.com'
            }  
        ]
    }
}