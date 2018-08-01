import {Component,OnInit} from '@angular/core';
import { FormGroup ,FormControl,Validators,FormBuilder } from '@angular/forms';
import {  Message } from 'primeng/primeng';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import {User} from '../model/user.model';
@Component({
    selector: 'login-form',
    providers:[LoginService],
    styles: [`
    .animationText:focus {
    outline: none !important;
    border-bottom:1px solid blue;
    box-shadow: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    
}
  `],
    template: ` <div style="width:33%;margin-left:36%;margin-top:6%;height:100%;box-shadow:  2px 2px 2px 2px #888888;"> 
<form [formGroup]="loginForm" (ngSubmit)="checkLogin()">
 

 

<div style="padding-bottom:4%">
        <p-messages [value]="msgs"></p-messages>
     </div>

 <div style="position: relative;text-align: left;margin: 24px 0 12px 0;padding-bottom:0px;margin-bottom:0px">
     <img src="assets/image/git.png" style="width: 20%;border-radius: 50%;padding-left:10%">
  </div>

  <div style="position: relative;text-align: left;padding-bottom:9%;margin:0px;">
     <h1 style="padding-left:11%;font-size: 24px;font-weight: 400;line-height: 1.3333;">Sign In</h1>
    
     <p style="padding-left:11%;">to zoom video download</p>
  
  </div>
  
     

        <div class="ui-grid ui-grid-responsive ui-grid-pad ui-fluid">
            <div class="ui-grid-row" >
        
                <div class="ui-grid-col-12"  style="padding-left:10%">
                        <span class="ui-float-label">
                            <input  pInputText class="animationText" id="userName"  style="border-top: 0;border-right: 0;border-left: 0; border-bottom-left-radius: 0;border-bottom-right-radius: 0;" type="text"  formControlName="userName" />
                             <label for="userName">User Name</label>
                        </span>
                </div>
            </div>

        <div class="ui-grid-row" > 
            <div class="ui-grid-col-12" style="padding-left:10%">
                    <div class="ui-message ui-messages-error ui-corner-all" *ngIf="!loginForm.controls['userName'].valid&&loginForm.controls['userName'].dirty">
                           
                            User Name is required
                    </div>
                </div>
        </div>

            <div class="ui-grid-row" style="padding-top:4%">
                <div class="ui-grid-col-12" style="padding-left:10%">
                    <span class="ui-float-label">
                   <input pInputText class="animationText" id="password" type="password" style="border-top: 0;border-right: 0;border-left: 0; border-bottom-left-radius: 0;border-bottom-right-radius: 0;" formControlName="password" />
                   <label for="password">Password</label>
                   </span>
                </div>
           </div>

           <div class="ui-grid-row" > 
                  <div class="ui-grid-col-12" style="padding-left:10%">
                       <div class="ui-message ui-messages-error ui-corner-all" *ngIf="!loginForm.controls['password'].valid&&loginForm.controls['password'].dirty">
                           
                            Password is required
                        </div>
                  </div>

            </div>
            
           <div class="ui-grid-row" style="padding-top:10%;padding-bottom:20%">
                
                <div class="ui-grid-col-12" style="padding-left:70%">
                  <button pButton type="submit" label="Login" [disabled]="!loginForm.valid"></button>
                </div>
            </div>
    
    </div> 
    
    </form>
</div>`
})
export class LoginComponent {
    userProfile:User = new User();
    loginForm:FormGroup;
    msgs: Message[] = [];
    batchId:String;
   
constructor(private router:Router,private loginService:LoginService,private fb: FormBuilder){

     this.loginForm = new FormGroup({
        userName:new FormControl('', <any>Validators.required),
        password:new FormControl('', <any>Validators.required) 
     });
}


   checkLogin() {
      

       if((this.loginForm.value.userName == "globalit2017") && (this.loginForm.value.password =="gitzoom2017") ){
           this.router.navigate(['admindashboard']);
       }else{
        this.msgs = [];
        this.loginService.chckUser(this.loginForm.value.userName,btoa(this.loginForm.value.password)).subscribe(
            data => {
                this.userProfile = data;
               
                
                if( data != null ){
                    this.batchId = data.batchId;
                    this.router.navigate(['/dashboard',this.batchId]);
                     
                }else{
                   
                      this.router.navigate(['']);
                     this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Invalid User Name Or Password' }); 
                }
            
            },
            err => {
                this.router.navigate(['']);
                this.msgs.push({ severity: 'error', summary: 'Error ', detail: 'Invalid User Name Or Password' });
            },
            () => { 
                
                    }

        ); 
       }
    }
}