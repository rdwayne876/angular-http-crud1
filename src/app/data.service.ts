import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) { }

  /**
   * sendGetRequest
   */
  public sendGetRequest() {
    return this.httpClient.get<any[]>(this.REST_API_SERVER);
  }

  /**
   * getOne
   * 
   * @Params id
   */
  public getOne(id:number) {
    return this.httpClient.get<any>(`${this.REST_API_SERVER}/${id}`)
  }
}
