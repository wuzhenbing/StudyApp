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

  public displayedColumns: string[] = ['select', 'id', 'title', 'courseCount'];
  public textBooxInfos: MatTableDataSource<TextBoxInfo> = null;
  public selection = new SelectionModel<TextBoxInfo>(true, []);

  ngOnInit() {
    this.textBooxInfoService.getTextBookInfos().subscribe(
      (infos: TextBoxInfo[]) => {
        this.textBooxInfos = new MatTableDataSource<TextBoxInfo>(infos);
      }
    );
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.textBooxInfos.data.length;
    return numSelected === numRows;
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: TextBoxInfo): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  new() {
    console.log(this.selection.selected);
  }

  delete() {
    if (this.selection.selected.length > 0) {
      //this.textBooxInfoService.
    }
  }
}
