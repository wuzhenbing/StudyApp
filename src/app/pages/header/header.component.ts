import { Component, OnInit, Inject } from '@angular/core';
import { BaseComponent } from '../base-component';
import { SystemContext } from 'src/app/utils/system-context';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfigManager } from 'src/app/utils/config-manager';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  constructor(public dialog: MatDialog) {
    super();
  }

  ngOnInit() {
  }

  public loginButton() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        SystemContext.isManager = true;
        this.isManager = true;
      }
    });
  }

  public logoutButton() {
    SystemContext.isManager = false;
    this.isManager = false;
  }
}


@Component({
  selector: 'app-login-dialog',
  templateUrl: 'login-dialog.component.html',
})
export class LoginDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>) { }

  public password: string;

  onOkClick(): void {
    if (this.password === ConfigManager.getValue(ConfigManager.passKey)) {
      this.dialogRef.close(true);
    } else {
      alert('パスワードが間違いました。');
    }
  }
}
