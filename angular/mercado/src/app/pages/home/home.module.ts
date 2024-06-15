import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannerComponent} from "../../components/banner/banner.component";
import {HomeComponent} from "./home.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
