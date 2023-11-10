import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private mailApi = 'https://formspree.io/f/myyvrgkj';

  constructor(private http: HttpClient) {}

  PostMessage(input: any) {
    return this.http.post(this.mailApi, input, { responseType: 'text' }).pipe(
      map(
        (response: any) => {
          if (response) {
            return response;
          } else {
            return null;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
