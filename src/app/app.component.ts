import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigManager } from './utils/config-manager';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = '学習アプリTest';

  public constructor(private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void {
    ConfigManager.init(this.http).then(
      () => {
        this.router.navigate(['MainPage']);
      }
    ).catch(
      (error) => {
        console.error(error);
      }
    );
  }
}
