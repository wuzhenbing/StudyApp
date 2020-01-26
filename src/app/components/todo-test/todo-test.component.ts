import { Component, OnInit } from '@angular/core';
import { TestManagerService } from 'src/app/services/test-manager-service';
import { SummaryTestInfoDto } from 'src/app/dto/summary-test-info';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-todo-test',
  templateUrl: './todo-test.component.html',
  styleUrls: ['./todo-test.component.css'],
  providers: [TestManagerService]
})
export class TodoTestComponent implements OnInit {

  public displayedColumns: string[] = ['title', 'mainInfos', 'costTime', 'action'];
  public todoListInfos: MatTableDataSource<SummaryTestInfoDto> = null;

  constructor(private testManagerService: TestManagerService) { }

  ngOnInit() {
    this.testManagerService.getAllTodoTestInfos<SummaryTestInfoDto[]>().subscribe(
      (rows) => {
        this.todoListInfos = new MatTableDataSource<SummaryTestInfoDto>(rows);
      },
      (error) => alert(error)
    );
  }


}
