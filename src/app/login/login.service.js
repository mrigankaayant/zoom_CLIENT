"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/Rx');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/zoomSOA';
        this.options = new http_2.RequestOptions();
        this.options.headers = new http_2.Headers();
        this.options.headers.append('Content-Type', 'application/json');
    }
    /*chckUser(user: User) {
        console.log(user);
        this.http.post(this.baseUrl + '/chckUser', user, this.options).map(response => response.json())
            .subscribe(
            data => console.log(data),
            err => console.log(err.json().message),
            () => console.log('Authentication Complete')
            );
    }*/
    LoginService.prototype.chckUser = function (userName, password) {
        return this.http.get(this.baseUrl + '/zoom/profile/' + userName + '/' + password, this.options).map(function (response) { return response.json(); });
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map