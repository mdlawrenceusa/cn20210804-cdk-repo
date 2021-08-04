import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  
  feedbackForm = this.formBuilder.group({
    name: '',
    phone: '',
    email: '',
    comment: ''
  });

  constructor(
        private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.feedbackForm.value);
    this.feedbackForm.reset();
  }

}
