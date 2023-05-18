import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPageComponent } from './top-page/top-page.component';
import { AddNewPatienceComponent } from './add-new-patience/add-new-patience.component';
import { FormsModule } from '@angular/forms';
import { PatientSearchComponent } from './patient-search/patient-search.component';
@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    AddNewPatienceComponent,
    PatientSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
