import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-side-bar-form',
  templateUrl: './side-bar-form.component.html',
  styleUrls: ['./side-bar-form.component.scss']
})
export class SideBarFormComponent implements OnInit {
  sideBarFormGroup: FormGroup;

  @Output() addData = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sideBarFormGroup = this.fb.group({
      name: ['', Validators.required],
      comment: ['']
    });
  }

  onSubmit() {
    console.log(this.sideBarFormGroup.value);
    this.addData.emit();
  }

}
