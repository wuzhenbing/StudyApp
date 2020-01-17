import { Component, OnInit } from '@angular/core';
import { TopInfosService } from 'src/app/services/top-info-service';
import { TopInfo } from 'src/app/dto/top-info';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-topinfo',
  templateUrl: './topinfo.component.html',
  styleUrls: ['./topinfo.component.css'],
  providers: [TopInfosService]
})
export class TopinfoComponent implements OnInit {

  constructor(private topInfoService: TopInfosService) { }

  public topInfos: MatTableDataSource<TopInfo> = null;
  public selection = new SelectionModel<TopInfo>(true, []);
  ngOnInit() {
    this.topInfoService.getTopInfos<TopInfo[]>().subscribe(
      (infos: TopInfo[]) => {
        this.topInfos = new MatTableDataSource<TopInfo>(infos);
      }
      ,
      (error) => {
        console.error(error);
      }
    );
  }
}
