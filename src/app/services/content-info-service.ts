import { BaseService } from './base-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContentInfo } from '../dto/content-Info';

export class ContentInfoService extends BaseService {
    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }
    public getContentInfoByBookInfo<T>(contentInfo: ContentInfo): Observable<T> {
        return this.httpClient.post<T>(this.ApiUrl + `/ContentInfo?ACTION=SELECT_BY_BOOKINFO`, JSON.stringify(contentInfo),
            { responseType: 'json', headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }

    public insertContentInfo<T>(contentInfos: ContentInfo[]): Observable<T> {
        return this.httpClient.post<T>(this.ApiUrl + `/ContentInfo?ACTION=INSERT`, JSON.stringify(contentInfos),
            { responseType: 'json', headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }

    public saveContentInfos<T>(saveInfo: {
        noMainInfoFlg: boolean,
        mainId: number,
        bookId: number,
        courseIndex: number,
        type: number,
        title: string,
        infos: ContentInfo[]
    }): Observable<T> {
        return this.httpClient.post<T>(this.ApiUrl + `/ContentInfo?ACTION=SAVE_ALL`, JSON.stringify(saveInfo),
            { responseType: 'json', headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
    }
}
