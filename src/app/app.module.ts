import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SandboxComponent } from './Components/sandbox.component';
import { Sandbox1Component } from './Components/sandbox1.component';
import { Sandbox2Component } from './Components/sandbox2.component';
import { ExtTempComponent } from './Components/ExtTemplate/ExtTemp.component';
import { NgForComponent } from './Components/NgForComponent/NgForComponent';
import { CondComponent } from './Components/CondComponents/Cond.component';
import { PropBindingComponent } from './Components/PropertyBinding/PropBind.component';
import { NgClassComponent } from './Components/NgClass/NgClass.component';
import { NgStyleComponent } from './Components/StyleBinding/NgStyleComponent.component';
import { PipesComponent } from './Components/AngularPipes/Pipes.component';
import { MouseEventComponent } from './Components/Events/MouseEvent.component';
import { ChangePropsComponent } from './Components/Events/ChangeProps.component';
import { KeyboardComponent } from './Components/Events/Keyboardevent.component';
import { ModalComponent } from './Components/NgModal/NgModal.component';
import { FormSubmitComponent } from './Components/SubmitForm/FormSubmit.component';
import { TemplateDrivenFormComponent} from './Components/TemplateDrivenForm/TemplateDrivenForm.component';
@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    Sandbox1Component,
    Sandbox2Component,
    ExtTempComponent,
    NgForComponent,
    CondComponent,
    PropBindingComponent,
    NgClassComponent,
    NgStyleComponent,
    PipesComponent,
    MouseEventComponent,
    ChangePropsComponent,
    KeyboardComponent,
    ModalComponent,
    FormSubmitComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
