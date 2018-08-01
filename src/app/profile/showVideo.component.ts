import {Component,OnInit} from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';
import { Meeting } from '../model/meeting.model';
@Component({
    selector: 'showVideo',
    template: `
               <div class="ui-g" style="background-color:#EEEEEE">
                       <div class="ui-g-8">
                                <img src= "assets/image/git.png" height="45" /> 
                        </div>

                        <div class="ui-g-1">
                          <div style="margin-top:8%">
                             <span style="color:blue;cursor:pointer;text-decoration:underline;" (click)="listUser()">User List</span> 
                           </div>
                        </div>

                        <div class="ui-g-1">
                          <div style="margin-top:8%">
                             <span style="color:blue;cursor:pointer;text-decoration:underline;" (click)="createUser()">Create User</span> 
                           </div>
                        </div>

                        <div class="ui-g-1">
                          <div style="margin-top:8%">
                                <span style="color:blue;cursor:pointer;text-decoration:underline" (click)="listVideo()">Meeting List</span>
                            </div>
                        </div>

                        <div class="ui-g-1">
                            <div style="margin-top:3%">
                                 <button pButton type="submit" (click)="logout()" label="Log Out"></button>
                            </div>
                        </div>

                </div>   
                  
                  <div class="ui-g-12 ui-md-12">
                    <div style="padding-left:25%;padding-top:5%">
                        <video  width="900" height="500" controls autoplay>
                            <source  src={{serverUrl}} type="video/mp4">
                        </video>
                    </div>
                 </div>
                  

               
              
               `
})
export class ShowVideoComponent {
    videos:Meeting[];
    serverUrl:String;
    constructor(private route:ActivatedRoute,private router: Router,private dashboardService:DashboardService){}
     ngOnInit(){
        this.serverUrl=this.route.snapshot.params["serverUrl"];
        
     }

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
