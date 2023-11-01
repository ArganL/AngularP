import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MoreInfoComponent } from './more-info/more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadBarComponent,
    ItemListComponent,
    MoreInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
