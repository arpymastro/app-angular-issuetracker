import { Component } from '@angular/core'

@Component({
    selector : 'propbind',
    template : `
        <h1>Property Binding</h1>
        <h3>Bind data from class and component to our template</h3>

        <!-- 3 ways to bind property --> 
        <div> <img src="{{ imageUrl }}"> </div><br/>
        <div> <img [src]="imageUrl"> </div><br/>
        <div> <img bind-src="imageUrl"> </div>

        <h4>Image location: <span [textContent] = 'imageUrl'></span></h4>
        <br>
        <hr>
        <h2>Create Post</h2>
        <p [hidden] = "isUnchanged">Post has been changed; please save changes</p>
        <button [disabled] = "isUnchanged">Save</button>
    `
})

export class PropBindingComponent{
    imageUrl:string = 'http://lorempixel.com/400/200';
    isUnchanged:boolean = false;
    
}
