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
var userList_service_1 = require('./userList.service');
var UserListComponent = (function () {
    function UserListComponent(route, router, userListService) {
        this.route = route;
        this.router = router;
        this.userListService = userListService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userListService.getUserList().subscribe(function (response) { return _this.users = response; }, function (error) { return console.log(error); });
    };
    UserListComponent.prototype.listVideo = function () {
        this.router.navigate(['listMeeting']);
    };
    UserListComponent.prototype.createUser = function () {
        this.router.navigate(['createUser']);
    };
    UserListComponent.prototype.logout = function () {
        this.router.navigate(['']);
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            template: "\n               <div class=\"ui-g\" style=\"background-color:#EEEEEE\">\n                       <div class=\"ui-g-9\">\n                                <img src= \"/resource/git.png\" height=\"45\" /> \n                        </div>\n\n                        <div class=\"ui-g-1\">\n                          <div style=\"margin-top:8%\">\n                             <span style=\"color:blue;cursor:pointer;text-decoration:underline;\" (click)=\"listVideo()\">Meeting List</span> \n                           </div>\n                        </div>\n\n                        <div class=\"ui-g-1\">\n                          <div style=\"margin-top:8%\">\n                             <span style=\"color:blue;cursor:pointer;text-decoration:underline;\" (click)=\"createUser()\">Create User</span> \n                           </div>\n                        </div>\n\n                        <div class=\"ui-g-12 ui-md-1\" >\n                               <div style=\"margin-top:3%\">\n                                 <button pButton type=\"submit\" (click)=\"logout()\" label=\"Log Out\"></button>\n                                </div>\n                          </div>\n\n                </div>\n            \n\n            <div class=\"ui-g-12\">\n                 <p-panel header=\"User List\">\n                   <p-dataTable [value]=\"users\" sortField=\"batchId\"  rowGroupMode=\"rowspan\"    [rows]=\"15\" [paginator]=\"true\">\n                        <p-column field=\"batchId\" [filter]=\"true\" filterPlaceholder=\"Search\"  header=\"Batch id\"></p-column>\n                        <p-column field=\"name\" [filter]=\"true\" filterPlaceholder=\"Search\"  header=\"Name\"></p-column>\n                        <p-column field=\"email\" [filter]=\"true\" filterPlaceholder=\"Search\"  header=\"Email\"></p-column>\n                        <p-column field=\"userName\" [filter]=\"true\" filterPlaceholder=\"Search\"  header=\"User Name\"></p-column>\n                        <p-column field=\"password\" [filter]=\"true\" filterPlaceholder=\"Search\"  header=\"Password\"></p-column>\n                    </p-dataTable>\n                </p-panel> \n                </div>\n               \n               "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, userList_service_1.UserListService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=userList.component.js.map