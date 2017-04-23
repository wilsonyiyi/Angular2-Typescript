import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; // Todo what? 默认结合

const CONTACT_URL = `./app/contacts.json`;

@Injectable()
export class ContactService {

  constructor(
    private http:Http
  ) {}

  request(url:string, opts:any) {
    return this.http.request(url, new RequestOptions(opts))
      .map(res => {
        let _res = res.json();

        if(opts.id) {
          for(let i = 0; i < _res.length; i++) {
            if(_res[i].id == opts.id) {
              _res = _res[i];
            }
          }
        }
        
        if(opts.collection) {
          let temp:any = [];
          for(let i = 0; i < _res.length; i++) {
            if(_res[i].collection == opts.collection) {
              temp.push(_res[i])
            }
          }
          _res = temp;
        }
        return _res;
      })
  }

  get(url:string, opts?:Object) {
    // Object.assign( {} , obj) 对象拷贝， 将obj源对象拷贝入{}目标对象
    return this.request(url, (<any>Object).assign({
      methods: 'get'
    }, opts));
  }

  // 
  getContactsData() {
    return this.get(CONTACT_URL);
  }

  // byid
  getContactById(id:number) {
    return this.get(CONTACT_URL, {id: id});
  }

  // 查看收藏
  getCollections() {
    return this.get(CONTACT_URL, {collection: 1});
  }

  // 新增联系人
  addContact(obj:Object = {}) {
    let body = JSON.stringify(obj);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(CONTACT_URL, body, options).map(res => res.json())
  }
}
