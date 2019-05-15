import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test3Component } from './test3/test3.component';

const test3Routes: Routes = [
  {  
    path: '',
    component: Test3Component
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(test3Routes)
  ],
  exports:[RouterModule]
})
export class Test3RouterModule { }

export const test3RoutingComponents = [Test3Component];
