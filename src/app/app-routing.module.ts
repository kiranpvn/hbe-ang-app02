import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DefaultComponent } from './default/default.component';
import { Help1Component } from './help1/help1.component';
import { HrIndexComponent } from './hr/hr-index/hr-index.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'index',component:DefaultComponent},
  {path:'',pathMatch:'full',redirectTo:'/index'},  
  {path:'help',component:Help1Component},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'hr',component:HrIndexComponent, loadChildren:()=>import('./hr/hr.module').then(x=>x.HrModule)},
  {path:'**',component:NotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
