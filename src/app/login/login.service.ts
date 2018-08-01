import {Injectable,OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import { User } from '../model/user.model';
import { Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LoginService{

     baseUrl: string;
     options: RequestOptionsArgs;

    constructor(private http: Http) {
        this.baseUrl = 'http://18.220.244.182/zoomSOA';
        this.options = new RequestOptions();
        this.options.headers = new Headers();
        this.options.headers.append('Content-Type', 'application/json');

    }

    chckUser(userName:String,password:String):Observable<User> {
        return this.http.get(this.baseUrl + '/zoom/profile/'+userName+'/'+password, this.options).map(response => response.json())
    }
}