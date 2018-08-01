import {Component,OnInit} from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ListMeetingService } from './listMeeting.service'
import { Meeting } from '../model/meeting.model';
@Component({
    selector: 'listVideo',
    template: `

                 <span *ngIf="showLoader">
      
                    <img src="assets/image/loading.gif" style="padding-top:15%;margin-left:41%;position: relative;" height="150" width="200" > 
      
                </span>

            <div *ngIf="!showLoader">
                <div class="ui-g"  style="background-color:#EEEEEE">
                       <div class="ui-g-9">
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

                        <div class="ui-g-12 ui-md-1" >
                               <div style="margin-top:3%">
                                 <button pButton type="submit" (click)="logout()" label="Log Out"></button>
                                </div>
                          </div>

                </div>
            

            <div class="ui-g-12">
                 <p-panel header="Meeting List">
                    <p-dataTable [value]="meetings" sortField="batchId"  rowGroupMode="rowspan"  selectionMode="single"   [(selection)]="selectedMeeting"  (onRowDblclick)="onRowSelect($even)"  [rows]="15" [paginator]="true">
                        
                        <p-column field="batchId" [filter]="true" filterPlaceholder="Search"  header="Batch id"></p-column>
                        <p-column field="topic" [filter]="true" filterPlaceholder="Search"  header="Topic"></p-column>
                        <p-column field="recordingStart" [filter]="true" filterPlaceholder="Search"  header="Recording Start Date"></p-column>
                    </p-dataTable>
                </p-panel> 
            </div>

    </div>
               
               `
})
export class ListMeeting implements OnInit{
    meetings:Meeting[];
    selectedMeeting:Meeting;
    showLoader:boolean;

    constructor(private route:ActivatedRoute,private router: Router,private listMeetingService:ListMeetingService){}
     ngOnInit(){

         this.showLoader = true;
        
        this.listMeetingService.getMeetingList().subscribe(
         response => {
			this.meetings=response
         },
         err => {
               this.showLoader = true; 
         },
        () => { 
			 this.showLoader = false;
		}
        );
        
     }

     onRowSelect(event:any) {
         this.router.navigate(['./showvideo',this.selectedMeeting.serverUrl]);
    }
     
     listUser(){
        
        this.router.navigate(['listUser']);
    }

    createUser(){
        this.router.navigate(['createUser']);
    }

    logout(){
        this.router.navigate(['']);
    }
}
