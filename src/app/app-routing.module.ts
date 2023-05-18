import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewPatienceComponent } from './add-new-patience/add-new-patience.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
const routes: Routes = [
  { path: "", component: AddNewPatienceComponent},
  { path: "inicio", component: AddNewPatienceComponent},
  { path: "search", component: PatientSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
