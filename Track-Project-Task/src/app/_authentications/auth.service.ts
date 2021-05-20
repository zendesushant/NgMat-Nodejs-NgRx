import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";




export class AuthInterceptor implements HttpInterceptor
{
    intercept(req:HttpRequest<any>,next:HttpHandler)
    {
        let token=localStorage.getItem("token");
        if(!token)
        {
            return next.handle(req);
        }
        else
        {
        let tokenizedReq=req.clone({

            setHeaders:{Authorization:`Bearer ${token}`}
        })
        return next.handle(tokenizedReq)
    }
    }
}