import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ScrollService } from '../../../services/scrollservice';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../../shared/services.service';
import { log, warn } from 'console';


@Component({
  selector: 'app-form-section',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.scss'
})
export class FormSectionComponent implements OnInit {

  http = inject(HttpClient);
  scrollService = inject(ScrollService)
  router = inject(Router)
  CommunicationService = inject(CommunicationService);
  private subscription: Subscription;


  isChecked: boolean = false;
  policiChecked: boolean = false;
  language: string = 'en';


  constructor(private communicationService: CommunicationService) {
    this.subscription = this.communicationService.getTranslateFunction().subscribe((language: string) => {
      this.language = language;
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    let choosedLanguage = localStorage.getItem('lanuage');
    if (choosedLanguage) {
      this.language = choosedLanguage;
    }
  }


  contactData = {
    name: '',
    email: '',
    message: '',
  }

  scrollTopTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

  Check() {
    this.isChecked = !this.isChecked;
    this.policiChecked = true;
  }


  post = {
    endPoint: 'https://filip-filipovic.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  emailSucces: Boolean = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.succesEmail();
            setTimeout(() => { this.emailSucces = false }, 4000);
            ngForm.resetForm();
          },
          error: (error) => {
            this.emailFail();
            setTimeout(() => { this.emailSucces = false }, 4000);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {

      ngForm.resetForm();
      this.isChecked = false;
      this.policiChecked = false;
    }
  }

  emailSent: boolean = false;
  succesEmail() {
    this.emailSucces = true;
    this.emailSent = true;
  }

  emailFail() {
    this.emailSucces = true;
    this.emailSent = this.emailSent;
  }

  enterForm(event: KeyboardEvent, ngForm: NgForm) {
    if (event.key === 'Enter') {


      if (ngForm.form.valid && this.isChecked) {
        this.onSubmit(ngForm);
        this.isChecked = false;
        this.policiChecked = false;
        this.contactData.message = '';
        ngForm.resetForm();
      }
    }
  }




}


