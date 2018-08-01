import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/primeng';

@Component({
    selector: 'menu',
    template: `<div class="ui-grid ui-fluid ui-grid-responsive ui-grid-pad" style="margin-left:-3%;margin-right:0.5%">
                  
                </div>`
})
export class MenuComponent implements OnInit {
    private items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Recruitment',icon:'fa-building',
                items: [{

                    label: 'RequirementEntry',
                    icon: 'fa-user',
                    routerLink: ['/requirementEntry']
                },
                { label: 'View Requirement', icon: 'fa-user', routerLink: ['/viewRequirement']},
                {label: 'View Requirement List', icon: 'fa-user', routerLink: ['/viewRequirementList']},
                { label: 'Job List', icon: 'fa-user', routerLink: ['/jobList']},
                { label: 'Salary Negotiation', icon: 'fa-user', routerLink: ['/jobList']},
                
                { label: 'Job Details', icon: 'fa-user', routerLink: ['/jobDetails']},
                
                {label: 'Candidate Entry', icon: 'fa-user', routerLink: ['/candidateEntry']},
                { label: 'Selection Steps', icon: 'fa-user', routerLink: ['/selectionSteps']},
                { label: 'HR Review', icon: 'fa-user', routerLink: ['/hrReview']},
              
                { label: 'Evaluation Result', icon: 'fa-user', routerLink: ['/evaluationFrom']},
               

                {label: 'Job Description', icon: 'fa-user', routerLink: ['/jobDescription']},
                { label: 'Candidate Selection For Salary', icon: 'fa-user', routerLink: ['/candidateSelection']},
                { label: 'Offer Letter', icon: 'fa-user', routerLink: ['/jobOffer']}
                ]  

                }

              
                ]
            }
          
        
    }
