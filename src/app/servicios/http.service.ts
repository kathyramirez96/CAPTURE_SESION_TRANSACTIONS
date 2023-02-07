import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly _http:HttpClient) { }

  async obtenerIP(){
    
    return  lastValueFrom(this._http.get("http://api.ipify.org/?format=json"));
  }
}
