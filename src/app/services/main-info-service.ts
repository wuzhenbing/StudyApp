import { BaseService } from './base-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainInfo } from '../dto/main-info';

export class MainInfoService extends BaseService {
    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }
    public selectBuBookInfo<T>(): Observable<T> {
        return this.httpClient.post<T>(this.ApiUrl + `/MainInfo?ACTION=SELECT_BY_BOOKINFO`, {},
            { responseType: 'json', headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }

    public insertMainInfo<T>(mainInfo: MainInfo): Observable<T> {
        return this.httpClient.post<T>(this.ApiUrl + `/TextBoox?ACTION=INSERT`, JSON.stringify(mainInfo),
            { responseType: 'json', headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }
}

