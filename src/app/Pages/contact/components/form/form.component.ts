import { ContactService } from './../../../../core/Services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  contactFrom!: FormGroup;
  showSpinner: boolean = false;
  resMsg: string = '';
  constructor(
    private fb: FormBuilder,
    private constatServise: ContactService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.contactFrom = this.fb.group({
      name: [''],
      email: [''],
      matter: [''],
      message: [''],
    });
  }

  sendContact(form: FormGroup) {
    if (form.valid) {
      this.showSpinner = !this.showSpinner;
      this.constatServise
        .contact({
          name: form.controls['name'].value,
          email: form.controls['email'].value,
          matter: form.controls['matter'].value,
          message: form.controls['message'].value,
        })
        .subscribe(
          (res) => {
            console.log(res);
            this.resMsg = res.message;
          },
          () => {},
          () => {
            this.showSpinner = !this.showSpinner;
            this.toastr.success('', this.resMsg);
          }
        );
    }
  }
}
