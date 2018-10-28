import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopnavMenuComponent } from './topnav-menu/topnav-menu.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      TopnavMenuComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' }
      ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
