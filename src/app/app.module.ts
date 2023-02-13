import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DineshTaskComponent } from './dinesh-task/dinesh-task.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactformComponent } from './reactform/reactform.component';
import { PutformComponent } from './putform/putform.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { CheckDirective } from './check.directive';




@NgModule({
  declarations: [
    AppComponent,
    DineshTaskComponent,
    ReactformComponent,
    PutformComponent,
    FormarrayComponent,
    CheckDirective,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
