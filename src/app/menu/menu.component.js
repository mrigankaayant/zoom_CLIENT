"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'Recruitment', icon: 'fa-building',
                items: [{
                        label: 'RequirementEntry',
                        icon: 'fa-user',
                        routerLink: ['/requirementEntry']
                    },
                    { label: 'View Requirement', icon: 'fa-user', routerLink: ['/viewRequirement'] },
                    { label: 'View Requirement List', icon: 'fa-user', routerLink: ['/viewRequirementList'] },
                    { label: 'Job List', icon: 'fa-user', routerLink: ['/jobList'] },
                    { label: 'Salary Negotiation', icon: 'fa-user', routerLink: ['/jobList'] },
                    { label: 'Job Details', icon: 'fa-user', routerLink: ['/jobDetails'] },
                    { label: 'Candidate Entry', icon: 'fa-user', routerLink: ['/candidateEntry'] },
                    { label: 'Selection Steps', icon: 'fa-user', routerLink: ['/selectionSteps'] },
                    { label: 'HR Review', icon: 'fa-user', routerLink: ['/hrReview'] },
                    { label: 'Evaluation Result', icon: 'fa-user', routerLink: ['/evaluationFrom'] },
                    { label: 'Job Description', icon: 'fa-user', routerLink: ['/jobDescription'] },
                    { label: 'Candidate Selection For Salary', icon: 'fa-user', routerLink: ['/candidateSelection'] },
                    { label: 'Offer Letter', icon: 'fa-user', routerLink: ['/jobOffer'] }
                ]
            }
        ];
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            template: "<div class=\"ui-grid ui-fluid ui-grid-responsive ui-grid-pad\" style=\"margin-left:-3%;margin-right:0.5%\">\n                  \n                </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map