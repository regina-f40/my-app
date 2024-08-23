import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';

import { MainPageComponent } from "../main-page/main-page.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    providers: [provideNativeDateAdapter()],
    imports: [MainPageComponent, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDatepickerModule, MatSelectModule, MatTooltip, MatButtonModule]
})


export class ContactComponent {
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    textAreaFormControl = new FormControl('', [Validators.required]);
  }