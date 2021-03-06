import { HttpClient } from '@angular/common/http';
import { BaseService } from './base-service';
import { Observable } from 'rxjs';

export class TopInfosService extends BaseService {
    constructor(public httpClient: HttpClient) {
        super(httpClient);
    }
    public getTopInfos<T>(): Observable<T> {
        return this.getCommonInfo<T>('GetTopInfos');
    }
}
