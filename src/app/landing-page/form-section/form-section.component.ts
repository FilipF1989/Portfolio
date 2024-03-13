import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ScrollService } from '../../../services/scrollservice';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-form-section',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.scss'
})
export class FormSectionComponent {

  isChecked: boolean = false;
  policiChecked: boolean = false;

  constructor(private scrollService: ScrollService, private router: Router) { }

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

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  }


  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
      this.isChecked = false;
      this.policiChecked = false;
    }
  }

  enterForm(event: KeyboardEvent, ngForm: NgForm) {
    if (event.key === 'Enter') {


      if (ngForm.form.valid && this.isChecked) {
        this.onSubmit(ngForm);
        this.isChecked = false;
        this.policiChecked = false;
        this.contactData.message = '';
        ngForm.resetForm();
        console.log('enter');
      }
    }
  }

}


