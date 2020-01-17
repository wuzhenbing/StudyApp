import { HttpClient } from '@angular/common/http';
import { ConfigManager } from '../utils/config-manager';
import { Observable } from 'rxjs';

export class BaseService {
    constructor(public httpClient: HttpClient) {
    }
    protected get ApiUrl(): string {
        const url = ConfigManager.getValue<string>(ConfigManager.uslKey);
        return url;
    }

    protected getCommonInfo<T>(action: string): Observable<T> {
        return this.httpClient.get<T>(this.ApiUrl + `/${action}/`);
    }
}
