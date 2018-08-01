import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pagenotfound/pageNotFound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent} from './dashboard/adminDashBoard.component';
import { UserListComponent } from './profile/userList.component';
import { CreateUserComponent } from './profile/createUser.component';
import { ListMeeting } from './profile/listVideo.component';
import { ShowVideoComponent } from './profile/showVideo.component';


export const router:ModuleWithProviders=RouterModule.forRoot([
                     {path:'',component:LoginComponent},
                     {path:'dashboard/:Id',component:DashboardComponent},
                     {path:'admindashboard',component:AdminDashboardComponent},
                     {path:'listUser',component:UserListComponent},
                     {path:'createUser',component:CreateUserComponent},
                     {path:'listMeeting',component:ListMeeting},
                     { path:'showvideo/:serverUrl',component:ShowVideoComponent},
                     {path:'**',component:PageNotFoundComponent}
                  ])