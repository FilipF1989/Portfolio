import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  
  private subject = new Subject<string>();

  translateLanguage(language: string) {
    this.subject.next(language);
  }

  getTranslateFunction(): Observable<string> {
    return this.subject.asObservable();
  }

  

  constructor() { }

  
}

