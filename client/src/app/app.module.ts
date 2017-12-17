
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './app.component';
import { routes } from './routes';
 
import { customHttpProvider } from './helpers/index';
import { AlertComponent } from './components/alert/index';
import { AuthGuard } from './auth/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { HomeComponent } from './components/home/index';
import { LoginComponent } from './components/login/index';
import { RegisterComponent } from './components/register/index';
import { CalendarComponent } from './components/calendar/index';
 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routes
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        CalendarComponent
    ],
    providers: [
        customHttpProvider,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }