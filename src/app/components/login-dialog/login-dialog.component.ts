import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfigManager } from 'src/app/utils/config-manager';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>) { }

  public password: string;

  onOkClick(): void {
    if (this.password === ConfigManager.getValue(ConfigManager.passKey)) {
      this.dialogRef.close(true);
    } else {
      alert('パスワードが間違いました。');
    }
  }
}
