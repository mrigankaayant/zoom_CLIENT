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
var dashboard_service_1 = require('../dashboard/dashboard.service');
var ShowVideoComponent = (function () {
    function ShowVideoComponent(route, router, dashboardService) {
        this.route = route;
        this.router = router;
        this.dashboardService = dashboardService;
    }
    ShowVideoComponent.prototype.ngOnInit = function () {
        this.serverUrl = this.route.snapshot.params["serverUrl"];
    };
    ShowVideoComponent.prototype.listUser = function () {
        console.log("Hit");
        this.router.navigate(['listUser']);
    };
    ShowVideoComponent.prototype.createUser = function () {
        this.router.navigate(['createUser']);
    };
    ShowVideoComponent.prototype.listVideo = function () {
        this.router.navigate(['listMeeting']);
    };
    ShowVideoComponent.prototype.logout = function () {
        this.router.navigate(['']);
    };
    ShowVideoComponent = __decorate([
        core_1.Component({
            selector: 'showVideo',
            template: "\n               <div class=\"ui-g\" style=\"background-color:#EEEEEE\">\n                       <div class=\"ui-g-8\">\n                                <img src= \"/resource/git.png\" height=\"45\" /> \n                        </div>\n\n                        <div class=\"ui-g-1\">\n                          <div style=\"margin-top:8%\">\n                             <span style=\"color:blue;cursor:pointer;text-decoration:underline;\" (click)=\"listUser()\">User List</span> \n                           </div>\n                        </div>\n\n                        <div class=\"ui-g-1\">\n                          <div style=\"margin-top:8%\">\n                             <span style=\"color:blue;cursor:pointer;text-decoration:underline;\" (click)=\"createUser()\">Create User</span> \n                           </div>\n                        </div>\n\n                        <div class=\"ui-g-1\">\n                          <div style=\"margin-top:8%\">\n                                <span style=\"color:blue;cursor:pointer;text-decoration:underline\" (click)=\"listVideo()\">Meeting List</span>\n                            </div>\n                        </div>\n\n                        <div class=\"ui-g-1\">\n                            <div style=\"margin-top:3%\">\n                                 <button pButton type=\"submit\" (click)=\"logout()\" label=\"Log Out\"></button>\n                            </div>\n                        </div>\n\n                </div>   \n                  \n                  <div class=\"ui-g-12 ui-md-12\">\n                    <div style=\"padding-left:25%;padding-top:5%\">\n                        <video  width=\"900\" height=\"500\" controls autoplay>\n                            <source  src={{serverUrl}} type=\"video/mp4\">\n                        </video>\n                    </div>\n                 </div>\n                  \n\n               \n              \n               "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, dashboard_service_1.DashboardService])
    ], ShowVideoComponent);
    return ShowVideoComponent;
}());
exports.ShowVideoComponent = ShowVideoComponent;
//# sourceMappingURL=showVideo.component.js.map