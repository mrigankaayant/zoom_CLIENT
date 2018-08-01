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
var dashboard_service_1 = require('./dashboard.service');
var DashboardComponent = (function () {
    function DashboardComponent(route, router, dashboardService) {
        this.route = route;
        this.router = router;
        this.dashboardService = dashboardService;
        this.fistDiv = true;
        this.secondDiv = false;
        this.thirdDiv = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fistDiv = true;
        this.secondDiv = false;
        this.thirdDiv = false;
        //this.dashboardService.getImage().subscribe(response=>this.pic=response);
        this.path = "../resource/de82054c-d992-4dae-9c0d-f407859ebb89.mp4";
        this.meetingTopic = "THIS IS DUMMY TOPIC";
        var id = this.route.snapshot.params["Id"];
        this.dashboardService.getVideos(this.route.snapshot.params["Id"]).subscribe(function (response) { return _this.videos = response; }, function (error) { return console.log(error); });
    };
    DashboardComponent.prototype.showVideo = function (url, topic) {
        if (this.secondDiv == false) {
            this.secondDiv = true;
            this.thirdDiv = false;
            this.fistDiv = false;
        }
        else {
            this.secondDiv = false;
            this.thirdDiv = true;
            this.fistDiv = false;
        }
        this.path = url;
        this.meetingTopic = topic;
        console.log("Path: " + this.path + "   Topic: " + this.meetingTopic + "  first Topic: " + this.fistDiv + "   second topic: " + this.secondDiv + "    third topic:  " + this.thirdDiv);
    };
    DashboardComponent.prototype.logout = function () {
        this.router.navigate(['']);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: "\n               <div class=\"ui-g\" style=\"background-color:#EEEEEE\">\n               <div class=\"ui-g-12\" style=\"-webkit-box-shadow: 0 1px 1px #888888;-moz-box-shadow: 0 1px 1px #888888;box-shadow: 0 1px 1px #888888;\">\n                      <div  class=\"ui-g-12 ui-md-11\">  \n                        <img src=\"../resource/image/git.png\" height=\"45\" /> \n                      </div>\n\n                      <div class=\"ui-g-12 ui-md-1\" >\n                               <div style=\"margin-top:3%\">\n                                 <button pButton type=\"submit\" (click)=\"logout()\" label=\"Log Out\"></button>\n                                </div>\n                          </div>\n                \n                </div>\n\n\n\n\n\n\n\n               <div *ngIf=\"fistDiv\" class=\"ui-g-12 ui-md-6\" >\n                 <div  class=\"ui-g-12 ui-md-12\" style=\"padding-top:30%;padding-left:20%\">\n                      <h1>Please Select The Video For Play</h1>\n                 </div>\n                 \n               </div>\n\n\n               <div *ngIf=\"secondDiv\" class=\"ui-g-12 ui-md-6\">\n                 <div  class=\"ui-g-12 ui-md-12\">\n                    <video id=\"myVideoTag\" width=\"900\" height=\"500\" controls>\n                        <source  src={{path}} type=\"video/mp4\">\n                    </video>\n                 </div>\n                 <div class=\"ui-g-12 ui-md-12\" >\n                   <h3 style=\"color:black\">{{meetingTopic}}</h3>\n                 </div> \n               </div>\n\n\n               <div *ngIf=\"thirdDiv\" class=\"ui-g-12 ui-md-6\">\n                 <div  class=\"ui-g-12 ui-md-12\">\n                    <video id=\"myVideoTag\" width=\"900\" height=\"500\" controls>\n                        <source  src={{path}} type=\"video/mp4\">\n                    </video>\n                 </div>\n                 <div class=\"ui-g-12 ui-md-12\" >\n                   <h3 style=\"color:black\">{{meetingTopic}}</h3>\n                 </div> \n               </div>\n\n\n\n\n\n\n\n               <div class=\"ui-g-12 ui-md-6\">\n                  <div *ngFor = \"let item of videos; let myIndex=index\">\n                     <div class=\"ui-g\" style=\"margin-left:30%\">\n                        <div class=\"ui-g-12 ui-md-4\">\n\n                              <img src=\"../resource/youtube-512.png\" style=\"margin-left:15%\"  width=\"100\" height=\"80\">\n                                \n                         </div>\n                         <div class=\"ui-g-12 ui-md-8\">\n                           <div class=\"ui-g-12 ui-md-12\" >\n                                <span style=\"color:blue;cursor:pointer;text-decoration:underline\" (click)=\"showVideo(item.serverUrl,item.topic)\" >Topic:{{item.topic}}</span>\n                            </div>\n                            <div class=\"ui-g-12 ui-md-12\">\n                                 <span style=\"color:black\">Upload:{{item.recordingStart}}</span>\n                             </div>\n                           \n                            <div class=\"ui-g-12 ui-md-12\">\n                            <a href={{item.serverUrl}} style=\"color:blue\" download> Download link </a>\n                            </div>\n                         </div>\n\n                     </div>\n                  </div>\n               </div>\n               "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, dashboard_service_1.DashboardService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map