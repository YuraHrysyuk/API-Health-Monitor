import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators, FormBuilder } from '@angular/forms';
import { ScenarioData } from 'src/app/endpoint/scenario';

@Component({
  selector: 'app-side-bar-form',
  templateUrl: './side-bar-form.component.html',
  styleUrls: ['./side-bar-form.component.scss']
})
export class SideBarFormComponent implements OnInit {
  @Input() scenario: ScenarioData;
  sideBarFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sideBarFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      comment: ['']
    });
  }

  onSubmit(form: any, formDirective: FormGroupDirective) {
    console.log(this.sideBarFormGroup.value);
    formDirective.resetForm();
    this.sideBarFormGroup.reset();
  }

}
