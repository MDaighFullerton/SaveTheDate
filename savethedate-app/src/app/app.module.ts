import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopnavMenuComponent } from './topnav-menu/topnav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { SendEmailComponent } from './send-email/send-email.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      TopnavMenuComponent,
      FooterComponent,
      EventInfoComponent,
      SendEmailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'event-info', component: EventInfoComponent, pathMatch: 'full' },
        { path: 'send-email', component: SendEmailComponent, pathMatch: 'full' }
      ]),
      BrowserAnimationsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatInputModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
