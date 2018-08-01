import {Component,OnInit} from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { DashboardService } from './dashboard.service'
import { Meeting } from '../model/meeting.model';
@Component({
    selector: 'admin-dashboard',
    template: `
               <div class="ui-g" style="background-color:#EEEEEE">
                    <div class="ui-g-11">
                            <img src= "assets/image/git.png" height="45" /> 
                    </div>
                     <div class="ui-g-12 ui-md-1" >
                        <button pButton type="submit" (click)="logout()" label="Log Out"></button>
                     </div>
              </div>

           <div class="ui-g">
               <div class="ui-g-12 ui-md-12" >
                  <div  class="ui-g-12 ui-md-2" style="margin-left:30%;margin-top:10%;">
                      <span style="color:blue;cursor:pointer;text-decoration:underline" (click)="listUser()"><h2>User List</h2></span>
                  </div>

                  <div  class="ui-g-12 ui-md-2" style="margin-top:10%">
                     <span style="color:blue;cursor:pointer;text-decoration:underline" (click)="createUser()"><h2>Create User</h2></span>  
                  </div>

                  <div  class="ui-g-12 ui-md-2" style="margin-top:10%">
                      <span style="color:blue;cursor:pointer;text-decoration:underline" (click)="listVideo()"><h2>List Video</h2></span>     
                  </div>
            </div>
               
               `
})
export class AdminDashboardComponent {
    constructor(private router:Router){}
    listUser(){
        this.router.navigate(['listUser']);
    }

    createUser(){
        this.router.navigate(['createUser']);
    }

    listVideo(){
        this.router.navigate(['listMeeting']); 
    }

    logout(){
        this.router.navigate(['']);
    }
  
}
