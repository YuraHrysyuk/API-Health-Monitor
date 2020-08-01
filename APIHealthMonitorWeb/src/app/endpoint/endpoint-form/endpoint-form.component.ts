import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-endpoint-form',
  templateUrl: './endpoint-form.component.html',
  styleUrls: ['./endpoint-form.component.scss']
})
export class EndpointFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      connectionPath: [''],
      comments: ['']
    });
  }

  onSubmit(form: any, formDirective: FormGroupDirective) {
    console.log(this.formGroup.value);
    formDirective.resetForm();
    this.formGroup.reset();
  }
}
