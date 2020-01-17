import { HttpClient } from '@angular/common/http';
import { BaseService } from './base-service';
import { Observable } from 'rxjs';

export class TextBookInfosService extends BaseService {
    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }
    public getTextBookInfos<T>(): Observable<T> {
        return this.httpClient.get<T>(this.ApiUrl + `/TextBoox?Action=selectAll`);
    }
}
