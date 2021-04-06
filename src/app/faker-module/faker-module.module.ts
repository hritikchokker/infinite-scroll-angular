import { CommonModule } from '@angular/common';
import { FakerModuleComponent } from './faker-module.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    FakerModuleComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule
  ], exports: [FakerModuleComponent]
})
export class FakerModuleModule { }
