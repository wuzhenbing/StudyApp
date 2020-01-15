import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CounterType {
    startEndFlg: boolean;
    allSeconds: number;
}

@Injectable({
    providedIn: 'root',
})
export class HeaderService {

    constructor() {

    }

    // counter
    private internalCounterObject: CounterType;
    counterChange$ = new BehaviorSubject<CounterType>(undefined);
    get counter() { return this.internalCounterObject; }
    set counter(v: CounterType) {
        this.counterChange$.next(v);
        this.internalCounterObject = v;
    }

    // timeout
    private timeOutObject: boolean;
    timeOutChange$ = new BehaviorSubject<boolean>(undefined);
    get timeOut() { return this.timeOutObject; }
    set timeOut(v: boolean) {
        this.timeOutChange$.next(v);
        this.timeOutObject = v;
    }
}
