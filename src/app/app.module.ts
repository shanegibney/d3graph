import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { D3graphComponent } from './d3graph/d3graph.component';

import { D3Service } from 'd3-ng2-service'; // <-- import statement

@NgModule({
  declarations: [
    AppComponent,
    D3graphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [D3Service], // <-- import provider
  bootstrap: [AppComponent]
})
export class AppModule { }
