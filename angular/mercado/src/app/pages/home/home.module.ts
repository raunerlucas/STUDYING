import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannerComponent} from "../../components/banner/banner.component";
import {HomeComponent} from "./home.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
