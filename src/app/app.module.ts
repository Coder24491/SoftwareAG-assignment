import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafNodeComponent } from './leaf-node/leaf-node.component';
import { ParentNodeComponent } from './parent-node/parent-node.component';

@NgModule({
  declarations: [
    AppComponent,
    LeafNodeComponent,
    ParentNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
