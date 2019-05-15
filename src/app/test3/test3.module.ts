import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Test3RouterModule, test3RoutingComponents } from './test3-router.module';

@NgModule({
  declarations: [test3RoutingComponents],
  imports: [
    CommonModule,
    Test3RouterModule,
    HttpClientModule
  ]
})
export class Test3Module { } 
