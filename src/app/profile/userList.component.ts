import {Component,OnInit} from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { UserListService } from './userList.service';
import { Message } from 'primeng/primeng'
@Component({
    selector: 'user-list',
    template: `


                <span *ngIf="showLoader">
      
                    <img src="assets/image/loading.gif" style="padding-top:15%;margin-left:41%;position: relative;" height="150" width="200" > 
      
                </span>

                <p-growl [(value)]="msgs" life=1000></p-growl>

            <div *ngIf="!showLoader">
               <div class="ui-g" style="background-color:#EEEEEE">
                       <div class="ui-g-9">
                                <img src= "assets/image/git.png" height="45" /> 
                        </div>

                        <div class="ui-g-1">
                          <div style="margin-top:8%">
                             <span style="color:blue;cursor:pointer;text-decoration:underline;" (click)="listVideo()">Meeting List</span> 
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
                 <p-panel header="User List">
                   <p-dataTable [value]="users" sortField="batchId"  rowGroupMode="rowspan"    [rows]="15" [paginator]="true">
                        <p-column field="batchId" [filter]="true" [style]="{'width':'7%','word-wrap':' break-word'}" filterPlaceholder="Search"  header="Batch id"></p-column>
                        <p-column field="name" [filter]="true" filterPlaceholder="Search"  header="Name"></p-column>
                        <p-column field="email" [filter]="true" filterPlaceholder="Search"  header="Email"></p-column>
                        <p-column field="userName" [filter]="true" filterPlaceholder="Search"  header="User Name"></p-column>
                        <p-column field="password" [filter]="true" filterPlaceholder="Search"  header="Password"></p-column>
                        <p-column styleClass="col-button" [style]="{'width':'4%'}">

                                 <ng-template pTemplate="header">
                                        Delete
                                 </ng-template>

                                <ng-template let-user="rowData" pTemplate="body">
                                    <button type="button" icon="fa-trash-o" pButton (click)="showDialog(user)" style="background-color:red"></button>
                                </ng-template>

                        </p-column>
                    </p-dataTable>
                </p-panel> 
            </div>

            <p-dialog  [(visible)]="displayDialog">

                    <p>Do You Want To Delete ?</p>

                    <p-footer>
                        <button type="button" pButton icon="fa-check" (click)="deleteUser()" label="Yes"></button>
                        <button type="button" pButton icon="fa-close" (click)="displayDialog=false" label="No"></button>
                    </p-footer>
            </p-dialog>
    </div> 


               `
})
export class UserListComponent {
    users:User[];
    showLoader:boolean;
    msgs: Message[] = [];
    id:string;
    displayDialog:boolean;

    constructor(private route:ActivatedRoute,private router: Router,private userListService:UserListService){}
     ngOnInit(){
         this.showLoader = true;
         this.id = null;
         this.displayDialog = false;

        this.userListService.getUserList().subscribe(
         response => {
			this.users=response;
         },
         err => {
               this.showLoader = true; 
         },
        () => { 
			 this.showLoader = false;
		}
        );
        
     }

showDialog(user:User){
    this.id = user.id;
    this.displayDialog = true;
    
}

deleteUser(){
    this.userListService.deleteUser(this.id).subscribe(
         response => {
			this.users=response;
         },
         err => {
              this.msgs = [];
               this.msgs.push({ severity: 'error', summary: 'Error', detail: 'Delete UnsuccessFull' });
               this.displayDialog = false;
         },
        () => { 
             this.msgs = [];
			this.msgs.push({ severity: 'success', summary: 'Success', detail: 'SuccessFully Deleted' });
            this.displayDialog = false;
		}
        );
}

listVideo(){
        this.router.navigate(['listMeeting']); 
    }

createUser(){
        this.router.navigate(['createUser']);
    }

    logout(){
        this.router.navigate(['']);
    }
  
}
