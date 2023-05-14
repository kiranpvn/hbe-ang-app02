import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrIndexComponent } from './hr-index/hr-index.component';
import { HrLoginComponent } from './hr-login/hr-login.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { HrRegisterComponent } from './hr-register/hr-register.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',children:[
    {path:'login',component:HrLoginComponent},
    {path:'register',component:HrRegisterComponent},
      ]}
];

@NgModule({
  declarations: [
    HrIndexComponent,
    HrLoginComponent,
    HrDashboardComponent,
    HrRegisterComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class HrModule { }
