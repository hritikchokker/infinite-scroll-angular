import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DataScrollerComponent } from './components/data-scroller/data-scroller.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    DataScrollerComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
