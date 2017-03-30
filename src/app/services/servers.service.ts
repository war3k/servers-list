import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';
const headers = new Headers({ 'Content-Type': 'application/json' });
const options = new RequestOptions({ headers: headers });

@Injectable()
export class ServersService {

  constructor(private http: Http) { }

    // Get all servers from the API
  getAllServers() {
    return this.http.get('/api/servers')
      .map(res => res.json());
  }
  getServerById(id) {
    return this.http.get('/api/servers/'+id)
      .map(res => res.json());
  }
  addNewServer(name,ip,type){
    let obj = {
      "name": name,
      "ip": ip,
      "type": type
    };
    let data = JSON.stringify(obj);
    console.log(data);
    return this.http.post('/api/servers/new', data, options)
  }
  deleteServer(id){
    let obj = {
      "id" : id,
      "function" : "delete"
    };
    let data = JSON.stringify(obj);
    return this.http.delete('/api/servers/'+id, options);
  }
  editServer(name:string,ip:string,id:string){
    let obj = {
      "function": "update",
      "server":{
        "name": name,
        "ip": ip
      }
    };
    let data = JSON.stringify(obj);
    return this.http.put('/api/servers/'+id,data, options);
  }
  startServer(id){
    let obj = {
      "function": "update",
      "server":{
        "status":"starting"
      }
    };
    let data = JSON.stringify(obj);
    return this.http.put('/api/servers/changeStatus/'+id,data, options);
  }
  restartServer(id){
    let obj = {
      "function": "update",
      "server":{
        "status":"starting"
      }
    };
    let data = JSON.stringify(obj);
    return this.http.put('/api/servers/changeStatus/'+id,data, options);
  }
  stopServer(id){
    let obj = {
      "function": "update",
      "server":{
        "status":"stopped"
      }
    };
    let data = JSON.stringify(obj);
    return this.http.put('/api/servers/changeStatus/'+id,data, options);
  }

}
