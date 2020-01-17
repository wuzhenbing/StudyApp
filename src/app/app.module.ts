import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent, LoginDialog } from './pages/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMaterialModule } from './all-material-module';
import { FormsModule } from '@angular/forms';
import { TopinfoComponent } from './components/topinfo/topinfo.component';
import { TextboxinfoComponent } from './components/textbox/textboxinfo/textboxinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    LoginDialog,
    TopinfoComponent,
    TextboxinfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AllMaterialModule
  ],
  providers: [],
  entryComponents: [LoginDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
