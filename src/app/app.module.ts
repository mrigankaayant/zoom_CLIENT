import { NgModule }      from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { router } from './app.routing';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './pagenotfound/pageNotFound.component';
import {LoginService} from'./login/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import{ DashboardService } from './dashboard/dashboard.service';
import { AdminDashboardComponent} from './dashboard/adminDashBoard.component';
import { UserListComponent } from './profile/userList.component';
import { UserListService } from './profile/userList.service';
import { CreateUserComponent } from './profile/createUser.component';
import { CreateUserService } from './profile/createUser.service';
import { ListMeeting } from './profile/listVideo.component';
import { ListMeetingService } from './profile/listMeeting.service';
import { ShowVideoComponent } from './profile/showVideo.component';
import { Ng2OrderModule } from 'ng2-order-pipe';

import {InputTextModule, ButtonModule,InputMaskModule,RadioButtonModule,CalendarModule,FileUploadModule,
         PanelModule,FieldsetModule,DropdownModule,SelectItem,CheckboxModule,InputTextareaModule,Message,
         DataTableModule,SharedModule,LazyLoadEvent,MenubarModule,MenuItem,GrowlModule,DialogModule} from 'primeng/primeng';

@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule, FormsModule, InputTextModule, ButtonModule,PanelModule,InputMaskModule,RadioButtonModule,CalendarModule,
                    PanelModule,FieldsetModule,DropdownModule,CheckboxModule,InputTextareaModule,FileUploadModule,MenubarModule,
                    DataTableModule,SharedModule,HttpModule,router,ReactiveFormsModule,Ng2OrderModule,GrowlModule,DialogModule
                ],
  declarations: [ AppComponent,LoginComponent,MenuComponent,FooterComponent,CreateUserComponent,ListMeeting,
                  PageNotFoundComponent,DashboardComponent,AdminDashboardComponent,UserListComponent,ShowVideoComponent
                ],
   providers:[LoginService,DashboardService,UserListService,CreateUserService,ListMeetingService],             
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
