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
var router_1 = require('@angular/router');
var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(router) {
        this.router = router;
    }
    AdminDashboardComponent.prototype.listUser = function () {
        console.log("Hit");
        this.router.navigate(['listUser']);
    };
    AdminDashboardComponent.prototype.createUser = function () {
        this.router.navigate(['createUser']);
    };
    AdminDashboardComponent.prototype.listVideo = function () {
        this.router.navigate(['listMeeting']);
    };
    AdminDashboardComponent.prototype.logout = function () {
        this.router.navigate(['']);
    };
    AdminDashboardComponent = __decorate([
        core_1.Component({
            selector: 'admin-dashboard',
            template: "\n               <div class=\"ui-g\" style=\"background-color:#EEEEEE\">\n                    <div class=\"ui-g-11\">\n                            <img src= \"/resource/git.png\" height=\"45\" /> \n                    </div>\n                     <div class=\"ui-g-12 ui-md-1\" >\n                        <button pButton type=\"submit\" (click)=\"logout()\" label=\"Log Out\"></button>\n                     </div>\n              </div>\n\n           <div class=\"ui-g\">\n               <div class=\"ui-g-12 ui-md-12\" >\n                  <div  class=\"ui-g-12 ui-md-2\" style=\"margin-left:30%;margin-top:10%;\">\n                      <span style=\"color:blue;cursor:pointer;text-decoration:underline\" (click)=\"listUser()\"><h2>User List</h2></span>\n                  </div>\n\n                  <div  class=\"ui-g-12 ui-md-2\" style=\"margin-top:10%\">\n                     <span style=\"color:blue;cursor:pointer;text-decoration:underline\" (click)=\"createUser()\"><h2>Create User</h2></span>  \n                  </div>\n\n                  <div  class=\"ui-g-12 ui-md-2\" style=\"margin-top:10%\">\n                      <span style=\"color:blue;cursor:pointer;text-decoration:underline\" (click)=\"listVideo()\"><h2>List Video</h2></span>     \n                  </div>\n            </div>\n               \n               "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());
exports.AdminDashboardComponent = AdminDashboardComponent;
//# sourceMappingURL=adminDashBoard.component.js.map