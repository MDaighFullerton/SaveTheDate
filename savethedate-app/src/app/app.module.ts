import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule,
  MatFormFieldModule, MatIconModule, MatGridListModule,
  MatStepperModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopnavMenuComponent } from './topnav-menu/topnav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { EventInfoComponent } from './event-info/event-info.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      TopnavMenuComponent,
      FooterComponent,
      EventInfoComponent,
      SendEmailComponent,
      CreateEventComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'event-info', component: EventInfoComponent, pathMatch: 'full' },
        { path: 'send-email', component: SendEmailComponent, pathMatch: 'full' },
        { path: 'create-event', component: CreateEventComponent, pathMatch: 'full' }
      ]),
      BrowserAnimationsModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatIconModule,
      MatGridListModule,
      FormsModule,
      ReactiveFormsModule,
      MatStepperModule,
      FlexLayoutModule,
      MatSnackBarModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   exports: [
      MatIconModule
   ]
})
export class AppModule { }
