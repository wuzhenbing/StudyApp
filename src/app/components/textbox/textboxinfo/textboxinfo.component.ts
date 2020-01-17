import { Component, OnInit } from '@angular/core';
import { TextBookInfosService } from 'src/app/services/textbox-info-service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { TextBoxInfo } from 'src/app/dto/text-box';

@Component({
  selector: 'app-textboxinfo',
  templateUrl: './textboxinfo.component.html',
  styleUrls: ['./textboxinfo.component.css'],
  providers: [TextBookInfosService]
})
export class TextboxinfoComponent implements OnInit {

  constructor(private textBooxInfoService: TextBookInfosService) { }

  public textBooxInfos: MatTableDataSource<TextBoxInfo> = null;
  public selection = new SelectionModel<TextBoxInfo>(true, []);

  ngOnInit() {
    this.textBooxInfoService.getTextBookInfos().subscribe(
      (infos: TextBoxInfo[]) => {
        this.textBooxInfos = new MatTableDataSource<TextBoxInfo>(infos);
      }
    );
  }
}
