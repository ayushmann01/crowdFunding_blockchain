import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { ContributeComponent } from './contribute/contribute.component';

const routes: Routes = [ 
  {path: 'contribute', component: ContributeComponent},
  {path: 'company', component: CompanyComponent},
  {path: "**", redirectTo: 'contribute'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
