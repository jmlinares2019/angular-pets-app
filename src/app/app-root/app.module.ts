/* Import modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* import components */
import { AppComponent } from './app.component';
import { AddComponent } from '../components/add/add.component';
import { SearchComponent } from '../components/search/search.component';
import { ListComponent } from '../components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
