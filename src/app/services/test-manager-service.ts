import { BaseService } from './base-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainInfo } from '../dto/main-info';

export class TestManagerService extends BaseService {
    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }
    public selectTestInfos<T>(id: number): Observable<T> {
        return this.httpClient.post<T>(this.ApiUrl + `/TestManager?ACTION=SELECT_ALL`, { bookId: id },
            { responseType: 'json', headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }

    public saveTestInfo<T>(testTitle: string, testMainIds: number[]) {
        return this.httpClient.post<T>(this.ApiUrl + `/TestManager?ACTION=INSERT`, { title: testTitle, mainIds: testMainIds },
            { responseType: 'json', headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }
}

