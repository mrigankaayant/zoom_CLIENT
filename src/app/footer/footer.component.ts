import {Component} from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'footer',
    template: `<div class="container-fluid text-center">
		© 2017 Copyright: <a href="#">Human Resource Management System(HRMS) </a>
	</div>
    `
})
export class FooterComponent {
     
}
