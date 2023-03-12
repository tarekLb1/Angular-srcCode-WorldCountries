import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //use the HTTP interceptor to intercept all the Requests and add the Headers
    const authReq = httpRequest.clone({
      headers: httpRequest.headers.set('mhamad', 'rizk')
    });

    console.log('Intercepted HTTP call', authReq);

    return next.handle(authReq);
    console.log(authReq)
  }
}


// https://ultimatecourses.com/blog/intro-to-angular-http-interceptors