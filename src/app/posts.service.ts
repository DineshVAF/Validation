import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // url = "http://192.168.0.17:2000/maskdecore/register";
  url = "https://62d6c8ae51e6e8f06f13140e.mockapi.io/value/sampleApi/";
  constructor(private http: HttpClient) { }

  // getPosts(): Observable<any> {
  //   return this.http.get("https://jsonplaceholder.typicode.com/posts")
  // }

  addApi(data:any): Observable<any> {
    return this.http.post(this.url, data);
  }

  updateData(constid:number, updateBody:any) {
    return this.http.put(this.url + constid, updateBody);
  }

  deleteData(constid:number){
    return this.http.delete(this.url + constid)
  }

  getData(inputValue: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/" + inputValue)

  }

}





// getcommentsbyparameter():Observable<any>{
// let params1 = new HttpParams().set('','');
// return this.httpClient.get("https://jsonplaceholder.typicode.com/posts",{param:params1})
// }