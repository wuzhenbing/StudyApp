import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AppComponent } from './app.component';
import { TextboxinfoComponent } from './components/textbox/textboxinfo/textboxinfo.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'MainPage', component: MainPageComponent },
  { path: 'TextBoxManager', component: TextboxinfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
