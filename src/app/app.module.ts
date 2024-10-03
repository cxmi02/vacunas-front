import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildrenComponent } from './components/children/children.component';
import { LocationSelectorComponent } from './components/location-selector/location-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ChildrenComponent, LocationSelectorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
