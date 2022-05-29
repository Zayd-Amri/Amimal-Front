import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private _router : Router) {}

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

  const token = localStorage.getItem("id_token");

  if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(cloned);
  }
  else {
      return next.handle(req).pipe(tap(
          (event) => {
            if (event instanceof HttpResponse) {
            }(err: any) => {
                if (err instanceof HttpErrorResponse) {
                  if (err.status === 401) {
                      this._router.navigate(['/login']);
                  }
                }
              }
        },
    ));
  }
}
}