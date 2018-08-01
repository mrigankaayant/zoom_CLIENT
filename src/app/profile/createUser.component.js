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
var user_model_1 = require('../model/user.model');
var createUser_service_1 = require('./createUser.service');
var CreateUserComponent = (function () {
    function CreateUserComponent(router, createUserService, fb) {
        this.router = router;
        this.createUserService = createUserService;
        this.fb = fb;
        this.userProfile = new user_model_1.User();
        this.msgs = [];
        this.createUserForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            email: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])),
            batchId: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    CreateUserComponent.prototype.addUser = function () {
        var _this = this;
        console.log("sdsdds");
        this.createUserService.createUser(this.createUserForm.value).subscribe(function (data) {
        }, function (err) {
            console.log(err.json().message);
            _this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'User Not Created' });
        }, function () {
            _this.msgs.push({ severity: 'success', summary: 'Success ', detail: ' Successfully User Created' });
            console.log('Authentication Complete');
            _this.createUserForm.reset();
        });
        ;
    };
    CreateUserComponent.prototype.listUser = function () {
        console.log("Hit");
        this.router.navigate(['listUser']);
    };
    CreateUserComponent.prototype.listVideo = function () {
        this.router.navigate(['listMeeting']);
    };
    CreateUserComponent.prototype.logout = function () {
        this.router.navigate(['']);
    };
    CreateUserComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            template: "\n               <div class=\"ui-g\" style=\"background-color:#EEEEEE\">\n                       <div class=\"ui-g-9\">\n                                <img src= \"/resource/git.png\" height=\"45\" /> \n                        </div>\n\n                        <div class=\"ui-g-1\">\n                          <div style=\"margin-top:8%\">\n                             <span style=\"color:blue;cursor:pointer;text-decoration:underline;\" (click)=\"listUser()\">User List</span> \n                           </div>\n                        </div>\n\n                        <div class=\"ui-g-1\">\n                          <div style=\"margin-top:8%\">\n                             <span style=\"color:blue;cursor:pointer;text-decoration:underline;\" (click)=\"listVideo()\">Meeting List</span> \n                           </div>\n                        </div>\n                           \n                           <div class=\"ui-g-12 ui-md-1\" >\n                               <div style=\"margin-top:3%\">\n                                 <button pButton type=\"submit\" (click)=\"logout()\" label=\"Log Out\"></button>\n                                </div>\n                          </div>\n                                                   \n                </div>\n                    <div style=\"width:35%;margin-left:31%;margin-top:6%;height:50%\"> \n                                            <div>\n                                                <p-messages [value]=\"msgs\"></p-messages>\n                                            </div>\n\n\n                        \n\n                        <form [formGroup]=\"createUserForm\" (ngSubmit)=\"addUser()\">\n                            <p-panel header=\"Create user\">\n                                    \n                                <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\n\n                                    <div class=\"ui-grid-row\" >\n                                        <div class=\"ui-grid-col-12\" >\n                                          Candidate Name:  <input pInputText type=\"text\" placeholder=\"Candidate Name\" formControlName=\"name\" />\n                                        </div>\n                                    </div>\n\n                                     <div class=\"ui-grid-row\" >\n                                        <div class=\"ui-grid-col-12\">\n                                           <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!createUserForm.controls['name'].valid&&createUserForm.controls['name'].dirty\">\n                                                 <i class=\"fa fa-close\"></i>\n                                                   Enter Candidate Name\n                                            </div>\n                                        </div>\n                                    </div>\n                                   \n                                    <div class=\"ui-grid-row\" >\n                                        <div class=\"ui-grid-col-12\" >\n                                          Email:  <input pInputText type=\"text\" placeholder=\"Email\" formControlName=\"email\" />\n                                        </div>\n                                    </div>\n\n                                    <div class=\"ui-grid-row\" >\n                                        <div class=\"ui-grid-col-12\">\n                                           <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!createUserForm.controls['email'].valid&&createUserForm.controls['email'].dirty\">\n                                                 <i class=\"fa fa-close\"></i>\n                                                   Enter Valid Email\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"ui-grid-row\" >\n                                        \n                                        <div class=\"ui-grid-col-12\" >\n                                        Batch Id:<input pInputText type=\"text\"  placeholder=\"Batch Id\" formControlName=\"batchId\" />\n                                        </div>\n                                    </div>\n\n                                    <div class=\"ui-grid-row\" >\n                                        <div class=\"ui-grid-col-12\">\n                                           <div class=\"ui-message ui-messages-error ui-corner-all\" *ngIf=\"!createUserForm.controls['batchId'].valid&&createUserForm.controls['batchId'].dirty\">\n                                                 <i class=\"fa fa-close\"></i>\n                                                   Enter Batch Id\n                                            </div>\n                                        </div>\n                                    </div>\n            \n                                    <div class=\"ui-grid-row\">\n                                            \n                                            <div class=\"ui-grid-col-7\" style=\"padding-left:40%\">\n                                            <button pButton type=\"submit\" label=\"Save\"  [disabled]=\"!createUserForm.valid\" ></button>\n                                            </div>\n                                        </div>\n                                    </div>\n                            </p-panel>\n                            </form>  \n                            \n                        </div>\n               \n               "
        }), 
        __metadata('design:paramtypes', [router_1.Router, createUser_service_1.CreateUserService, forms_1.FormBuilder])
    ], CreateUserComponent);
    return CreateUserComponent;
}());
exports.CreateUserComponent = CreateUserComponent;
//# sourceMappingURL=createUser.component.js.map