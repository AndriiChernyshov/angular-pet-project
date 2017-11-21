import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PotShelfItemComponent } from './component/pot-shelf-item/pot-shelf-item.component';
import { PotShelfComponent } from './component/pot-shelf/pot-shelf.component';
import { PotDetailComponent } from './component/pot-detail/pot-detail.component';
import { AddPotComponent } from './component/add-pot/add-pot.component';
import { ActionPotComponent } from './component/action-pot/action-pot.component';


@NgModule({
  declarations: [
    AppComponent,
    PotShelfItemComponent,
    PotShelfComponent,
    PotDetailComponent,
    AddPotComponent,
    ActionPotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
