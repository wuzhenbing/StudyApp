import { Component, OnInit } from '@angular/core';
import { ContentInfo } from '../../dto/content-Info';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute } from '@angular/router';
import { ContentInfoService } from 'src/app/services/content-info-service';
import { AppUtils } from 'src/app/utils/app-utils';
import { MainInfoService } from 'src/app/services/main-info-service';

@Component({
  selector: 'app-word-course',
  templateUrl: './word-course.component.html',
  styleUrls: ['./word-course.component.css'],
  providers: [ContentInfoService, MainInfoService]
})
export class WordCourseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private contentInfoService: ContentInfoService, private mainInfoService: MainInfoService) { }

  public displayedColumns: string[] = ['select', 'id', 'content', 'content1', 'content2'];
  public contentInfos: MatTableDataSource<ContentInfo> = new MatTableDataSource<ContentInfo>();
  public selection = new SelectionModel<ContentInfo>(true, []);

  public bookId = null;
  public textBoxName = null;
  public courseCount = null;

  public courseOptions = [];

  public selectedCourse = -1;

  public saveBtnDisableFlg = true;

  public noMainInfoFlg = false;

  ngOnInit() {
    this.bookId = this.route.snapshot.queryParams['id'];
    this.textBoxName = this.route.snapshot.queryParams['title'];
    this.courseCount = this.route.snapshot.queryParams['courseCount'];
    this.initOption();
  }

  onChange(v: number) {
    const searchInfo = new ContentInfo();
    searchInfo.bookId = this.bookId;
    searchInfo.courseIndex = v;
    searchInfo.type = 1;
    this.contentInfoService.getContentInfoByBookInfo<ContentInfo[]>(searchInfo).subscribe(
      (res: ContentInfo[]) => {
        if (res.length === 0) {
          this.noMainInfoFlg = true;
        } else {
          this.noMainInfoFlg = false;
        }
        this.contentInfos = new MatTableDataSource<ContentInfo>(res);
      },
      (error) => {
        alert(error);
      }
    );
  }

  clear() {
    this.selectedCourse = -1;
    this.contentInfos = new MatTableDataSource<ContentInfo>();
    this.selection.clear();
    this.saveBtnDisableFlg = true;
  }

  private initOption() {
    for (let i = 1; i <= this.courseCount; i++) {
      this.courseOptions.push(i);
    }
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ContentInfo): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  addRows() {
    const count = this.contentInfos.data.length;
    for (let i = 1; i <= 5; i++) {
      const info = new ContentInfo();
      info.id = count + i;
      info.bookId = this.bookId;
      this.contentInfos.data.push(info);
    }
    this.contentInfos.filter = '';
    this.saveBtnDisableFlg = false;
  }

  save() {
    const saveList = this.contentInfos.data.filter(
      (v: ContentInfo) => AppUtils.isNullorUndefined(v.content) && AppUtils.isNullorUndefined(v.content1)
    );
  }
}


