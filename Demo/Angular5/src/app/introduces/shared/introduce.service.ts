import { Injectable } from '@angular/core';
import { Http , Response , Headers , RequestOptions , RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Introduce } from './introduce.model';

@Injectable()
export class IntroduceService {
  selectedIntroduce: Introduce;
  introduceList: Introduce[];
  constructor(private http: Http) { }

  postIntroduce(introduce: Introduce)
  {
    var body = JSON.stringify(introduce);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:53986/api/Introduce',body,requestOptions).map(x=>x.json());
  }

  putIntroduce(id,introduce)
  {
    var body = JSON.stringify(introduce);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Put,headers: headerOptions});
    return this.http.put('http://localhost:53986/api/Introduce/'+id,body,requestOptions).map(res=>res.json());
  }

  getIntroduceList()
  {
    this.http.get('http://localhost:53986/api/Introduce').map((data: Response)=>{return data.json() as Introduce[];}).toPromise().then(x=>this.introduceList = x)
  }

  deleteIntroduce(id: number)
  {
    return this.http.delete('http://localhost:53986/api/Introduce/'+id).map(res => res.json());
  }
}
