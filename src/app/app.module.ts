import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent, LoginDialog } from './pages/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMaterialModule } from './all-material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopinfoComponent } from './components/topinfo/topinfo.component';
import { TextboxinfoComponent, TextInfoDialog } from './components/textbox/textboxinfo/textboxinfo.component';
import { ComfirmDialogComponent } from './components/comfirm-dialog/comfirm-dialog.component';
import { WordCourseComponent } from './components/word-course/word-course.component';
import { SentenceCourseComponent } from './components/sentence-course/sentence-course.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    LoginDialog,
    TopinfoComponent,
    TextboxinfoComponent,
    TextInfoDialog,
    ComfirmDialogComponent,
    WordCourseComponent,
    SentenceCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AllMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [LoginDialog, TextInfoDialog, ComfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
