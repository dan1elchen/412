import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ResultComponent } from './components/result/result.component';
import { ParentComponent } from './components/parent/parent.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
