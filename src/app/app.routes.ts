import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [], // only AppComponent!
})
export class AppModule {}
