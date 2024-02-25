// scroll.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToFooterSubject = new BehaviorSubject<boolean>(false);
  scrollToFooter$ = this.scrollToFooterSubject.asObservable();

  constructor() { }

  scrollToFooter() {
    this.scrollToFooterSubject.next(true);
  }
}
