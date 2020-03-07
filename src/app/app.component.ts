import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  constructor(private builder: FormBuilder) { }
  registerForm: FormGroup;
  submitted = false;
user : any={firstName: ''};
  ngOnInit() {
    this.registerForm = this.builder.group({
      firstName: ['', Validators.required],
      surName: [''],
      Email: ['', Validators.required],
      password: ['', Validators.required],
      birthday: ['', Validators.required]
    });
  }

  get val() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
  //  console.log(this.registerForm.value);
    console.log('SUCCESS!! \n\n' + JSON.stringify(this.registerForm.value, null, 5));
  //  console.log(this.user);
  }

}