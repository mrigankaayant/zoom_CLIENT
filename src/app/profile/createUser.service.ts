import {Injectable,OnInit} from '@angular/core';
import {Http, Response,ResponseContentType} from '@angular/http';
import { User } from '../model/user.model';
import { Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CreateUserService{

    baseUrl: string;
     options: RequestOptionsArgs;

    constructor(private http: Http) {
        this.baseUrl = 'http://18.220.244.182/zoomSOA';
        this.options = new RequestOptions();
        this.options.headers = new Headers();
        this.options.headers.append('Content-Type', 'application/json');

    }

    createUser(user:User){
        
         return this.http.post(this.baseUrl+'/zoom/profile',user,this.options).map(response => response.json());
    }

}