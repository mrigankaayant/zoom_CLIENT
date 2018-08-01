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
var listMeeting_service_1 = require('./listMeeting.service');
var ListMeeting = (function () {
    function ListMeeting(route, router, listMeetingService) {
        this.route = route;
        this.router = router;
        this.listMeetingService = listMeetingService;
    }
    ListMeeting.prototype.ngOnInit = function () {
        var _this = this;
        this.listMeetingService.getMeetingList().subscribe(function (response) { return _this.meetings = response; }, function (error) { return console.log(error); });
    };
    ListMeeting.prototype.onRowSelect = function (event) {
        this.router.navigate(['./showvideo', this.selectedMeeting.serverUrl]);
    };
    ListMeeting.prototype.listUser = function () {
        console.log("Hit");
        this.router.navigate(['listUser']);
    };
    ListMeeting.prototype.createUser = function () {
        this.router.navigate(['createUser']);
    };
    ListMeeting.prototype.logout = function () {
        this.router.navigate(['']);
    };
    ListMeeting = __decorate([
        core_1.Component({
            selector: 'listVideo',
            template: "\n                <div class=\"ui-g\" style=\"background-color:#EEEEEE\">\n                       <div class=\"ui-g-9\">\n                                <img src= \"/resource/git.png\" height=\"45\" /> \n                        </div>\n\n                        <div class=\"ui-g-1\">\n                          <div style=\"margin-top:8%\">\n                             <span style=\"color:blue;cursor:pointer;text-decoration:underline;\" (click)=\"listUser()\">User List</span> \n                           </div>\n                        </div>\n\n                        <div class=\"ui-g-1\">\n                          <div style=\"margin-top:8%\">\n                             <span style=\"color:blue;cursor:pointer;text-decoration:underline;\" (click)=\"createUser()\">Create User</span> \n                           </div>\n                        </div>\n\n                        <div class=\"ui-g-12 ui-md-1\" >\n                               <div style=\"margin-top:3%\">\n                                 <button pButton type=\"submit\" (click)=\"logout()\" label=\"Log Out\"></button>\n                                </div>\n                          </div>\n\n                </div>\n            \n\n            <div class=\"ui-g-12\">\n                 <p-panel header=\"Meeting List\">\n                    <p-dataTable [value]=\"meetings\" sortField=\"batchId\"  rowGroupMode=\"rowspan\"  selectionMode=\"single\"  dataKey=\"batchId\" [(selection)]=\"selectedMeeting\" (onRowSelect)=\"onRowSelect($even)\"  [rows]=\"15\" [paginator]=\"true\">\n                        \n                        <p-column field=\"batchId\" [filter]=\"true\" filterPlaceholder=\"Search\"  header=\"Batch id\"></p-column>\n                        <p-column field=\"topic\" [filter]=\"true\" filterPlaceholder=\"Search\"  header=\"Topic\"></p-column>\n                        <p-column field=\"recordingStart\" [filter]=\"true\" filterPlaceholder=\"Search\"  header=\"Recording Start Date\"></p-column>\n                    </p-dataTable>\n                </p-panel> \n                </div>\n               \n               "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, listMeeting_service_1.ListMeetingService])
    ], ListMeeting);
    return ListMeeting;
}());
exports.ListMeeting = ListMeeting;
//# sourceMappingURL=listVideo.component.js.map