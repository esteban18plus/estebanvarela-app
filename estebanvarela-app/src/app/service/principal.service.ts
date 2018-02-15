import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers} from '@angular/http';

@Injectable()
export class PrincipalService {

    private urlBase = 'https://dog.ceo/api/breeds/list/all';
    private options: RequestOptions;
    constructor(private _http: Http) {
    }

    getAll() {
        const endPoint = `${this.urlBase}`;
        return this._http.get(endPoint);
    }
}
