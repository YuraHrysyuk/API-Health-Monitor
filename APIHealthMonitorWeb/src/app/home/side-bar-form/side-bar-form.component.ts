import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators, FormBuilder } from '@angular/forms';
import { ScenarioData } from 'src/app/shared/scenario';
import { ScenarioDataService } from 'src/app/services/scenario-data.service';

@Component({
  selector: 'app-side-bar-form',
  templateUrl: './side-bar-form.component.html',
  styleUrls: ['./side-bar-form.component.scss']
})
export class SideBarFormComponent implements OnInit {
  @Input() scenario: ScenarioData;
  sideBarFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private dataService: ScenarioDataService) { }

  ngOnInit(): void {
    this.sideBarFormGroup = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern(/[a-zA-Z]\s[0-9]*/)]],
      description: ['']
    });
  }

  onSubmit(form: any, formDirective: FormGroupDirective) {
    console.log(this.sideBarFormGroup.value);
    console.log(form.value);
    if (form.value.id === '') {
      console.log('Post method here!');
      const newScenario: ScenarioData = {name: form.value.name, description: form.value.description };
      this.dataService.createScenario(newScenario).subscribe(response => console.log(response));
    } else {
      console.log('Put method here!!!');
      const newScenario: ScenarioData = {id: Number(form.value.id), name: form.value.name, description: form.value.description };
      this.dataService.updateScenario(newScenario).subscribe(response => console.log(response));
    }
    formDirective.resetForm();
    this.sideBarFormGroup.reset();
  }

}
