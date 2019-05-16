import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';
import { OriginalComponent } from '../original/original.component';

import { Design1Component } from '../design1/design1.component';
import { Design2Component } from '../design2/design2.component';
import { Design3Component } from '../design3/design3.component';
import { Design4Component } from '../design4/design4.component';
import { Design5Component } from '../design5/design5.component';
import { Design6Component } from '../design6/design6.component';
import {ArticleComponent} from '../design3/article.component';


import { ErrorComponent } from '../shared/error/error.component';

const routes: Routes = [{
  path: '', redirectTo: 'original', pathMatch: 'full'
},
{
  path: 'original', component: OriginalComponent, canActivate: [AuthGuard],
  data: {
    page: 'original',
    redirectPath: 'original'
  }
},
{
  path: 'design1', component: Design1Component, canActivate: [AuthGuard],
  data: {
    page: 'design1',
    redirectPath: 'design1'
  }
},
{
  path: 'design2', component: Design2Component, canActivate: [AuthGuard],
  data: {
    page: 'design2',
    redirectPath: 'design2'
  }
},
{
  path: 'design3', component: Design3Component, canActivate: [AuthGuard],
  data: {
    page: 'design3',
    redirectPath: 'design3'
  }
},
{
  path: 'design4', component: Design4Component, canActivate: [AuthGuard],
  data: {
    page: 'design4',
    redirectPath: 'design4'
  }
},
{
  path: 'design5', component: Design5Component, canActivate: [AuthGuard],
  data: {
    page: 'design5',
    redirectPath: 'design5'
  }
},
{
  path: 'design6',component: Design6Component, canActivate: [AuthGuard],
  data: { 
    page: 'design6',
    redirectPath: 'design6'
  }
},
// {
//   path: 'test3', 
//  loadChildren: '../test3/test3.module#Test3Module'
// },
{
  path: 'error', component: ErrorComponent
},
{
  path: '**', component: ErrorComponent, data: { error: 404 }
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }


export const routingComponents = [OriginalComponent, Design1Component,  Design2Component,
Design3Component, Design4Component, Design5Component, Design6Component,ErrorComponent, ArticleComponent];

