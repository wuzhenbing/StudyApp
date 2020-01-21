import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AppComponent } from './app.component';
import { TextboxinfoComponent } from './components/textbox/textboxinfo/textboxinfo.component';
import { WordCourseComponent } from './components/word-course/word-course.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'MainPage', component: MainPageComponent },
  { path: 'TextBoxManager', component: TextboxinfoComponent },
  { path: 'WordCourse', component: WordCourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
