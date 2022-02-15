import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page1PageComponent} from "./page1-page/page1-page.component";
import {Page2PageComponent} from "./page2-page/page2-page.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'page1', component: Page1PageComponent},
  {path: 'page2', component: Page2PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
