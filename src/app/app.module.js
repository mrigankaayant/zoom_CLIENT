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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var login_component_1 = require('./login/login.component');
var menu_component_1 = require('./menu/menu.component');
var footer_component_1 = require('./footer/footer.component');
var pageNotFound_component_1 = require('./pagenotfound/pageNotFound.component');
var login_service_1 = require('./login/login.service');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var dashboard_service_1 = require('./dashboard/dashboard.service');
var adminDashBoard_component_1 = require('./dashboard/adminDashBoard.component');
var userList_component_1 = require('./profile/userList.component');
var userList_service_1 = require('./profile/userList.service');
var createUser_component_1 = require('./profile/createUser.component');
var createUser_service_1 = require('./profile/createUser.service');
var listVideo_component_1 = require('./profile/listVideo.component');
var listMeeting_service_1 = require('./profile/listMeeting.service');
var showVideo_component_1 = require('./profile/showVideo.component');
var primeng_1 = require('primeng/primeng');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, primeng_1.InputTextModule, primeng_1.ButtonModule, primeng_1.PanelModule, primeng_1.InputMaskModule, primeng_1.RadioButtonModule, primeng_1.CalendarModule,
                primeng_1.PanelModule, primeng_1.FieldsetModule, primeng_1.DropdownModule, primeng_1.CheckboxModule, primeng_1.InputTextareaModule, primeng_1.FileUploadModule, primeng_1.MenubarModule,
                primeng_1.DataTableModule, primeng_1.SharedModule, http_1.HttpModule, app_routing_1.router, forms_1.ReactiveFormsModule
            ],
            declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, menu_component_1.MenuComponent, footer_component_1.FooterComponent, createUser_component_1.CreateUserComponent, listVideo_component_1.ListMeeting,
                pageNotFound_component_1.PageNotFoundComponent, dashboard_component_1.DashboardComponent, adminDashBoard_component_1.AdminDashboardComponent, userList_component_1.UserListComponent, showVideo_component_1.ShowVideoComponent
            ],
            providers: [login_service_1.LoginService, dashboard_service_1.DashboardService, userList_service_1.UserListService, createUser_service_1.CreateUserService, listMeeting_service_1.ListMeetingService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map