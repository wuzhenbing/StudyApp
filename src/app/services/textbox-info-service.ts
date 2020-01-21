import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base-service';
import { Observable } from 'rxjs';
import { TextBoxInfo } from '../dto/text-box';

export class TextBookInfosService extends BaseService {
    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }
    public getTextBookInfos<T>(): Observable<T> {
        return this.httpClient.post<T>(this.ApiUrl + `/TextBoox?ACTION=SELECT_ALL`, {},
            { responseType: 'json', headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }

    public createTextBox<T>(textBoxInfo: TextBoxInfo): Observable<T> {
        return this.httpClient.post<T>(this.ApiUrl + `/TextBoox?ACTION=INSERT`, JSON.stringify(textBoxInfo),
            { responseType: 'json', headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }
    public updateTextBox<T>(textBoxInfo: TextBoxInfo): Observable<T> {
        return this.httpClient.post<T>(this.ApiUrl + `/TextBoox?ACTION=UPDATE`,
            JSON.stringify(textBoxInfo),
            { responseType: 'json', headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }

    public deleteTextBox<T>(ids: number[]): Observable<T> {
        return this.httpClient.post<T>(this.ApiUrl + `/TextBoox?ACTION=DELETE`,
            JSON.stringify(ids),
            { responseType: 'json', headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }
}
