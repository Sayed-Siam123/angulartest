import { Injectable, Injector } from '@angular/core';
import { HttpEvent,HttpInterceptor,HttpHandler,HttpRequest,HttpHeaders,HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrManager){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        
        console.log('intercepted request ... ');
        

        if(localStorage.getItem('token') != null) 
                {
                    const token =  localStorage.getItem('token');
                    const id =  localStorage.getItem('id');
                    const id_role =  localStorage.getItem('id_user_roles');
                   
                        req = req.clone({
                            setHeaders: {
                              Authorization: `Bearerfdfjoisfoijidfjsifdjsoidsijfdisjdfi${token}sadasdadasdasdasdasdasdasdasdasdasdasdasdasdas`,
                              Accept: `application/json`,
                              id: id,
                              user_role: id_role
                            }
                          });
                          return next.handle(req);

                    }

                    else {
                        return next.handle(req).pipe(catchError(err => {
                            if (err instanceof HttpErrorResponse) {
                                if (err.status === 403) {
                                    
                                    this.toastr.errorToastr('Access Denied!', 'Error',{
                                        toastTimeout: 3000,
                                        animate: 'slideFromBottom',
                                      });
                                    
                                    window.location.pathname='login';
                                    console.log('this should print your error!');
                                }
                            }
                    }));
                }
            
        }
    }