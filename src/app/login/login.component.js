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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var login_service_1 = require('./login.service');
var user_model_1 = require('../model/user.model');
var LoginComponent = (function () {
    function LoginComponent(router, loginService, fb) {
        this.router = router;
        this.loginService = loginService;
        this.fb = fb;
        this.userProfile = new user_model_1.User();
        this.msgs = [];
        this.loginForm = new forms_1.FormGroup({
            userName: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    LoginComponent.prototype.checkLogin = function () {
        var _this = this;
        if ((this.loginForm.value.userName == "admin") && (this.loginForm.value.password == "admin")) {
            this.router.navigate(['admindashboard']);
        }
        else {
            this.msgs = [];
            this.loginService.chckUser(this.loginForm.value.userName, this.loginForm.value.password).subscribe(function (data) {
                _this.userProfile = data;
                if (data != null) {
                    _this.batchId = data.batchId;
                    _this.router.navigate(['/dashboard', _this.batchId]);
                    console.log(_this.userProfile.userName);
                    console.log(_this.userProfile.password);
                    console.log(_this.userProfile.email);
                    console.log(_this.userProfile.batchId);
                }
                else {
                    alert("asas");
                    _this.router.navigate(['']);
                    _this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Invalid User Name Or Password' });
                }
            }, function (err) {
                console.log(err.json().message);
                _this.router.navigate(['']);
                _this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Invalid User Name Or Password' });
            }, function () {
                console.log('Authentication Complete');
            });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            providers: [login_service_1.LoginService],
            template: " <div style=\"width:35%;margin-left:31%;margin-top:6%;height:50%\"> \n<form [formGroup]=\"loginForm\" (ngSubmit)=\"checkLogin()\">\n \n  <div style=\"text-align: center;margin: 24px 0 12px 0;\">\n     <img src=\"../resource/git.png\" style=\"width: 40%;border-radius: 50%;\">\n  </div>\n  <p-panel header=\"Login\">\n     <div>\n        <p-messages [value]=\"msgs\"></p-messages>\n     </div>\n\n        <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\n            <div class=\"ui-grid-row\" >\n        \n                <div class=\"ui-grid-col-12\">\n                  User Name: <input pInputText type=\"text\" placeholder=\"Username\" formControlName=\"userName\" />\n                </div>\n            </div>\n\n        <div class=\"ui-grid-row\" > \n            <div class=\"ui-grid-col-12\">\n                    <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!loginForm.controls['userName'].valid&&loginForm.controls['userName'].dirty\">\n                            <i class=\"fa fa-close\"></i>\n                            User Name is required\n                    </div>\n                </div>\n        </div>\n\n            <div class=\"ui-grid-row\" >\n                <div class=\"ui-grid-col-12\">\n                  Password: <input pInputText type=\"password\"  placeholder=\"Passworad\" formControlName=\"password\" />\n                </div>\n           </div>\n\n           <div class=\"ui-grid-row\" > \n                  <div class=\"ui-grid-col-12\">\n                       <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!loginForm.controls['password'].valid&&loginForm.controls['password'].dirty\">\n                            <i class=\"fa fa-close\"></i>\n                            Password is required\n                        </div>\n                  </div>\n\n            </div>\n            \n           <div class=\"ui-grid-row\" >\n                \n                <div class=\"ui-grid-col-7\" style=\"padding-left:40%\">\n                  <button pButton type=\"submit\" label=\"Login\" [disabled]=\"!loginForm.valid\"></button>\n                </div>\n            </div>\n    \n    </div> \n    </p-panel> \n    </form>\n</div>"
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService, forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map