import {Component,OnInit} from '@angular/core';
import { FormGroup ,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { CreateUserService } from './createUser.service';
import {  Message } from 'primeng/primeng';
@Component({
    selector: 'user-list',
    template: `

                

       
               <div class="ui-g" style="background-color:#EEEEEE">
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
                             <span style="color:blue;cursor:pointer;text-decoration:underline;" (click)="listVideo()">Meeting List</span> 
                           </div>
                        </div>
                           
                           <div class="ui-g-12 ui-md-1" >
                               <div style="margin-top:3%">
                                 <button pButton type="submit" (click)="logout()" label="Log Out"></button>
                                </div>
                          </div>
                                                   
                </div>
                    <div style="width:35%;margin-left:31%;margin-top:6%;height:50%"> 
                                            <div>
                                                <p-messages [value]="msgs"></p-messages>
                                            </div>


                        <span *ngIf="showLoader">
      
                    <img src="assets/image/process.gif" style="margin-bottom:7%;margin-left:45%;position: relative;" width="90" > 
      
                </span>

                        <form [formGroup]="createUserForm"  (ngSubmit)="addUser()">
                            <p-panel header="Create user">
                                    
                                <div class="ui-grid ui-grid-responsive ui-grid-pad ui-fluid">

                                    <div class="ui-grid-row" >
                                        <div class="ui-grid-col-12" >
                                          Candidate Name:  <input pInputText type="text" placeholder="Candidate Name" formControlName="name" />
                                        </div>
                                    </div>

                                     <div class="ui-grid-row" >
                                        <div class="ui-grid-col-12">
                                           <div class="ui-message ui-messages-error ui-corner-all" *ngIf="!createUserForm.controls['name'].valid&&createUserForm.controls['name'].dirty">
                                                 <i class="fa fa-close"></i>
                                                   Enter Candidate Name
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div class="ui-grid-row" >
                                        <div class="ui-grid-col-12" >
                                          Email:  <input pInputText type="text" placeholder="Email" formControlName="email" />
                                        </div>
                                    </div>

                                    <div class="ui-grid-row" >
                                        <div class="ui-grid-col-12">
                                           <div class="ui-message ui-messages-error ui-corner-all" *ngIf="!createUserForm.controls['email'].valid&&createUserForm.controls['email'].dirty">
                                                 <i class="fa fa-close"></i>
                                                   Enter Valid Email
                                            </div>
                                        </div>
                                    </div>

                                    <div class="ui-grid-row" >
                                        
                                        <div class="ui-grid-col-12" >
                                        Batch Id:<input pInputText type="text"  placeholder="Batch Id" formControlName="batchId" />
                                        </div>
                                    </div>

                                    <div class="ui-grid-row" >
                                        <div class="ui-grid-col-12">
                                           <div class="ui-message ui-messages-error ui-corner-all" *ngIf="!createUserForm.controls['batchId'].valid&&createUserForm.controls['batchId'].dirty">
                                                 <i class="fa fa-close"></i>
                                                   Enter Batch Id
                                            </div>
                                        </div>
                                    </div>
            
                                    <div class="ui-grid-row">
                                            
                                            <div class="ui-grid-col-7" style="padding-left:40%">
                                            <button pButton type="submit" label="Save"  [disabled]="!createUserForm.valid" ></button>
                                            </div>
                                        </div>
                                    </div>
                            </p-panel>
                            </form>  
                            
                        </div>
                    
               
               `
})
export class CreateUserComponent {
    userProfile:User = new User();
    createUserForm:FormGroup;
    msgs: Message[] = [];
    batchId:String;
    showLoader:boolean;
    
constructor(private router:Router,private createUserService:CreateUserService,private fb: FormBuilder){

     
     this.createUserForm = new FormGroup({
        name:new FormControl('',Validators.required),
        email: new FormControl('', Validators.compose([Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])),
        batchId:new FormControl('',Validators.required) 
     });
}

 addUser() {
     
     this.showLoader = true;
     this.createUserService.createUser(this.createUserForm.value).subscribe(
            data => {
            },
            err => {
                this.showLoader = true;
                
                this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'User Not Created' });
            },
            () => { 
                 this.msgs.push({ severity: 'success', summary: 'Success ', detail: ' Successfully User Created' });
                 this.showLoader = false;
                
                this.createUserForm.reset();
                    }

        ); ;
 }


listUser(){
        
        this.router.navigate(['listUser']);
    }

    listVideo(){
        this.router.navigate(['listMeeting']); 
    }
    

    logout(){
        this.router.navigate(['']);
    }
  
}