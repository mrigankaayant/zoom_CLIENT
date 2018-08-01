"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var pageNotFound_component_1 = require('./pagenotfound/pageNotFound.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var adminDashBoard_component_1 = require('./dashboard/adminDashBoard.component');
var userList_component_1 = require('./profile/userList.component');
var createUser_component_1 = require('./profile/createUser.component');
var listVideo_component_1 = require('./profile/listVideo.component');
var showVideo_component_1 = require('./profile/showVideo.component');
exports.router = router_1.RouterModule.forRoot([
    { path: '', component: login_component_1.LoginComponent },
    { path: 'dashboard/:Id', component: dashboard_component_1.DashboardComponent },
    { path: 'admindashboard', component: adminDashBoard_component_1.AdminDashboardComponent },
    { path: 'listUser', component: userList_component_1.UserListComponent },
    { path: 'createUser', component: createUser_component_1.CreateUserComponent },
    { path: 'listMeeting', component: listVideo_component_1.ListMeeting },
    { path: 'showvideo/:serverUrl', component: showVideo_component_1.ShowVideoComponent },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
]);
//# sourceMappingURL=app.routing.js.map