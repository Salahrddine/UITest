import { HttpClientModule } from '@angular/common/http';
import { RepService } from './rep.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RepComponentComponent } from './rep-component/rep-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RepComponentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
