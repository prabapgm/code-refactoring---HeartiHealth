import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HealthPredictorService } from '../../services/health-predictor/health-predictor.service';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-health-predictor',
  templateUrl: './health-predictor.component.html',
  styleUrls: ['./health-predictor.component.scss']
})
export class HealthPredictorComponent implements OnInit {
  items;
  checkoutForm;
  submitted = false;
  isHeartOK: Boolean;


  @ViewChild('dialog', { static: false }) resultDialog;

  constructor(private dialogService: NbDialogService, private formBuilder: FormBuilder,
    private healthPredictor: HealthPredictorService) {
    this.checkoutForm = this.formBuilder.group({
      age: ['', Validators.required],
      sex: ['', ''],
      cp: ['',''],
      trestbps: ['', Validators.required],
      chol: ['', Validators.required],
      fbs: ['', Validators.required],
      restecg: ['',''],
      thalach: ['', Validators.required],
      exang: ['',''],
      oldpeak: ['', [Validators.required, Validators.pattern('([1-9]|10)')]],
      slope: ['', [Validators.required, Validators.pattern('[0-1]')]],
      ca: ['', [Validators.required, Validators.pattern('([1-9]|10)')]],
      thal: ['', [Validators.required, Validators.pattern('[3]|[6]|[7]')]],
    });
  }

  // numberOnly(event): boolean {
  //   const charCode = (event.which) ? event.which : event.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //     return false;
  //   }
  //   return true;

  // }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {      
      return;
    }
    this.healthPredictor.getHeartPredictorResult(this.checkoutForm.value).subscribe((response: any) => {
      if (response.Status === 200) {
        this.dialogService.open(this.resultDialog, { hasScroll: true });
        this.isHeartOK = !!response.Result;
      }
    });
    //this.checkoutForm.reset();
  }

  // convenience getter for easy access to form fields
  get f() { return this.checkoutForm.controls; }
}
