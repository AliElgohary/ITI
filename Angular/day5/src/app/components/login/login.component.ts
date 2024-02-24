import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [
        Validators.required,
        Validators.pattern(
          '^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$'
        ),
      ]],
      additionalPhoneNumbers: this.formBuilder.array([]),
      address: this.formBuilder.array([]),
    });
  }

  get fullName() {
    return this.formGroup.get('fullName');
  }

  get email() {
    return this.formGroup.get('email');
  }

  get phoneNumber() {
    return this.formGroup.get('phoneNumber');
  }

  get additionalPhoneNumbers() {
    return this.formGroup.get('additionalPhoneNumbers') as FormArray;
  }

  newPhone(): FormGroup {
    return this.formBuilder.group({
      phone: ['', Validators.pattern(
        '^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$'
      )],
    });
  }

  removePhoneNumberInfo(currentIndex: number) {
    this.additionalPhoneNumbers.removeAt(currentIndex);
  }

  newAddress(): FormGroup {
    return this.formBuilder.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      PostalCode: ['', Validators.required],
    });
  }

  get address() {
    return this.formGroup.get('address') as FormArray;
  }

  addAddress() {
    this.address.push(this.newAddress());
  }

  removeAddressInput(currentIndex: number) {
    this.address.removeAt(currentIndex);
  }
}
