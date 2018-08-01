import {Component,OnInit} from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { DashboardService } from './dashboard.service'
import { Meeting } from '../model/meeting.model';
@Component({
    selector: 'dashboard',
    template: `

              
              <span *ngIf="showLoader">
      
                    <img src="assets/image/loading.gif" style="padding-top:15%;margin-left:41%;position: relative;" height="150" width="200" > 
      
                </span>

            <div *ngIf="!showLoader">

            <div class="ui-g" style="background-color:#EEEEEE">
               
               <div class="ui-g-12" style="-webkit-box-shadow: 0 1px 1px #888888;-moz-box-shadow: 0 1px 1px #888888;box-shadow: 0 1px 1px #888888;">
                      <div  class="ui-g-12 ui-md-11">  
                        <img src="assets/image/git.png" height="45" /> 
                      </div>

                      <div class="ui-g-12 ui-md-1" >
                               <div style="margin-top:3%">
                                 <button pButton type="submit" (click)="logout()" label="Log Out"></button>
                                </div>
                          </div>
                
                </div>

            <div *ngIf="videos != null">
               <div *ngIf="fistDiv" class="ui-g-12 ui-md-6" >
                 
                  <div  class="ui-g-12 ui-md-12" >
                        <video  width="700" height="400" controls autoplay>
                          <source  src={{videos[0].serverUrl}} type="video/mp4">
                      </video>
                  </div>

                  <div  class="ui-g-12 ui-md-12" >
                        <h3 style="color:black">{{videos[0].topic}}</h3>
                  </div>
   
               </div>


               <div *ngIf="secondDiv" class="ui-g-12 ui-md-6">
                 <div  class="ui-g-12 ui-md-12">
                    <video  width="700" height="400" controls autoplay>
                        <source  src={{path}} type="video/mp4">
                    </video>
                 </div>
                 <div class="ui-g-12 ui-md-12" >
                   <h3 style="color:black">{{meetingTopic}}</h3>
                 </div> 
               </div>


               <div *ngIf="thirdDiv" class="ui-g-12 ui-md-6">
                 <div  class="ui-g-12 ui-md-12">
                    <video  width="700" height="400" controls autoplay>
                        <source  src={{path}} type="video/mp4">
                    </video>
                 </div>
                 <div class="ui-g-12 ui-md-12" >
                   <h3 style="color:black">{{meetingTopic}}</h3>
                 </div> 
               </div>



               <div class="ui-g-12 ui-md-6" >
               <div class="scroll" style="overflow:scroll;height:100vh">
                  <div *ngFor = "let item of videos| orderBy: 'recordingStart':'reverse':'true'; let myIndex=index" >
                     <div class="ui-g" style="margin-left:20%;background-color:#cfcfcf">
                        <div class="ui-g-12 ui-md-4">

                              <img src="assets/image/youtube-512.png" style="margin-left:15%"  width="100" height="80">
                                
                         </div>
                         <div class="ui-g-12 ui-md-8">
                           <div class="ui-g-12 ui-md-12" >
                                <span style="color:blue;cursor:pointer;text-decoration:underline" (click)="showVideo(item.serverUrl,item.topic)" >Topic:{{item.topic}}</span>
                            </div>
                            <div class="ui-g-12 ui-md-12">
                                 <span style="color:black">Upload:{{item.recordingStart}}</span>
                             </div>
                           
                            <div class="ui-g-12 ui-md-12">
                            <a href={{item.serverUrl}} style="color:blue" download> Download link </a>
                            </div>
                         </div>

                     </div>
                  </div>
                  </div>
               </div>
            </div>

           
            </div>

             <div *ngIf="videos == null" style="text-align:center">
                <img src="assets/image/video_not_found.png" style="margin-top:14%"  width="400" height="200">
            </div>
               `
})
export class DashboardComponent {

    
    videos:Meeting[];
    path:String;
    meetingTopic:String;
    fistDiv:boolean = true;
    secondDiv:boolean = false;
    thirdDiv:boolean = false;
    pic:String;
    showLoader:boolean;

    constructor(private route:ActivatedRoute,private router: Router,private dashboardService:DashboardService){}
     ngOnInit(){

        this.showLoader = true;
        this.fistDiv = true;
        this.secondDiv = false;
        this.thirdDiv = false;
        this.meetingTopic = "THIS IS DUMMY TOPIC";
        let id=this.route.snapshot.params["Id"];
       
        this.dashboardService.getVideos(btoa(this.route.snapshot.params["Id"])).subscribe(
         response => {
			  this.videos=response;
         },
         err => {
               this.showLoader = true; 
         },
        () => { 
			 this.showLoader = false;
		}
        );
        
     }


     showVideo(url:string,topic:String){
       if(this.secondDiv == false){
          this.secondDiv = true;
          this.thirdDiv = false; 
          this.fistDiv = false;
       }else{
            this.secondDiv = false;
            this.thirdDiv = true; 
            this.fistDiv = false;
       }
     this.path = url;
     this.meetingTopic = topic;

    }
    
     logout(){
        this.router.navigate(['']);
    }
}