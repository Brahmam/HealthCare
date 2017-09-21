import { Injectable } from '@angular/core';
import { RequestOptions, Http, Response, Headers, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { Movie } from '../../models/movie';
import { Global } from '../../../app/Shared/global';

@Injectable()
export class MovieService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private movieesUrl = Global.WEB_API_URL;  // URL to web api
    constructor(private _http: Http) { }

    getMovies(): Observable<Movie[]> {
        return this._http.get(this.movieesUrl + 'Movies/Get')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    create(movie: Movie): Observable<boolean> {
        let body = JSON.stringify(
            {
                "token": "88nx837x18n313b7812n31273n8x7328173897x3n3"
            }
        );
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({
            headers: headers,
            body: body
        });

        return this._http.post(this.movieesUrl + 'Movies/Post/', JSON.stringify(movie), { headers: headers })
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    edit(movie: Movie): Observable<boolean> {
        let body = JSON.stringify(
            {
                "token": "88nx837x18n313b7812n31273n8x7328173897x3n3"
            }
        );
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({
            headers: headers,
            body: body
        });

        return this._http.put(this.movieesUrl + 'Movies/Put/', JSON.stringify(movie), { headers: headers })
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    remove(id: number): Observable<boolean> {
        return this._http.delete(this.movieesUrl + 'Movies/Delete/' + id)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        //Implement your error logging mechanism for your application. it's for demo purposes only
        console.error('An error occurred', error.message);
        return Promise.reject(error.message || error);
    }
}